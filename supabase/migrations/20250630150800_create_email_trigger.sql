-- Enable the http extension to make HTTP requests from the database
CREATE EXTENSION IF NOT EXISTS http;

-- Create a function that will be triggered after inserting a new sponsor
CREATE OR REPLACE FUNCTION trigger_send_welcome_email()
RETURNS TRIGGER AS $$
DECLARE
  project_url text := 'https://zauhnvileypapauidjox.supabase.co';
  service_role_key text := current_setting('app.settings.service_role_key', true);
  payload json;
  response record;
BEGIN
  -- Prepare the payload with the new sponsor data
  payload := json_build_object(
    'record', json_build_object(
      'fullname', NEW.fullname,
      'email', NEW.email,
      'company', NEW.company,
      'phone', NEW.phone
    )
  );

  -- Call the Edge Function via HTTP POST
  SELECT * INTO response
  FROM http((
    'POST',
    project_url || '/functions/v1/send-welcome-email',
    ARRAY[
      http_header('Authorization', 'Bearer ' || service_role_key),
      http_header('Content-Type', 'application/json')
    ],
    'application/json',
    payload::text
  )::http_request);

  -- Log the response (optional)
  IF response.status != 200 THEN
    RAISE WARNING 'Failed to send welcome email: % %', response.status, response.content;
  ELSE
    RAISE NOTICE 'Welcome email sent successfully: %', response.content;
  END IF;

  -- Always return NEW to continue with the INSERT operation
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create the trigger that fires after each INSERT on the sponsors table
DROP TRIGGER IF EXISTS send_welcome_email_trigger ON sponsors;
CREATE TRIGGER send_welcome_email_trigger
  AFTER INSERT ON sponsors
  FOR EACH ROW
  EXECUTE FUNCTION trigger_send_welcome_email();
