"use client"
import React from 'react';
import { convertFromRaw } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';
import styles from './RichTextRenderer.module.scss'

interface RichTextRendererProps {
  content: string;
  className?: string;
}

export function RichTextRenderer({ content, className }: RichTextRendererProps) {
  const renderContent = () => {
    if (!content) return '';

    try {
      // Try to parse as raw content state (JSON)
      const rawContentState = JSON.parse(content);
      const contentState = convertFromRaw(rawContentState);
      
      // Convert to HTML with proper styling options
      const html = stateToHTML(contentState);
      
      return html;
    } catch (error) {
      console.error(error)
      // Fallback to plain text if parsing fails (for backward compatibility)
      return content.replace(/\n/g, '<br />');
    }
  };

  const htmlContent = renderContent();

  return (
    <div
      className={`${styles.container} ${className}`}
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
}
