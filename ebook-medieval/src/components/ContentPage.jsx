import React from 'react';
import './ContentPage.css';

const ContentPage = ({ chapter, illustration, isLeft, pageNumber }) => {
  
  // Left page: Chapter title, illustration, and opening
  if (isLeft) {
    return (
      <div className="content-page-container">
        <div className="page-texture"></div>
        <div className="page-border">
          <div className="left-page-content">
            {/* Chapter header */}
            <div className="chapter-header">
              <span className="chapter-number">Chapter {chapter.id}</span>
              <h2 className="chapter-title">{chapter.title}</h2>
              <p className="chapter-subtitle">{chapter.subtitle}</p>
              <div className="title-divider">
                <svg viewBox="0 0 200 20" className="divider-svg">
                  <line x1="0" y1="10" x2="70" y2="10" stroke="currentColor" strokeWidth="1"/>
                  <circle cx="85" cy="10" r="3" fill="none" stroke="currentColor" strokeWidth="1"/>
                  <circle cx="100" cy="10" r="5" fill="currentColor"/>
                  <circle cx="115" cy="10" r="3" fill="none" stroke="currentColor" strokeWidth="1"/>
                  <line x1="130" y1="10" x2="200" y2="10" stroke="currentColor" strokeWidth="1"/>
                </svg>
              </div>
            </div>

            {/* Illustration */}
            {illustration && (
              <div 
                className="chapter-illustration"
                dangerouslySetInnerHTML={{ __html: illustration }}
              />
            )}

            {/* Quote if available */}
            {chapter.quote && (
              <blockquote className="chapter-quote">
                <span className="quote-mark">"</span>
                {chapter.quote}
                <span className="quote-mark">"</span>
              </blockquote>
            )}

            {/* Highlight if available */}
            {chapter.highlight && (
              <div className="highlight-box">
                <span className="highlight-icon">✦</span>
                <p className="highlight-text">{chapter.highlight}</p>
              </div>
            )}

            <div className="page-number left">{pageNumber}</div>
          </div>
        </div>
      </div>
    );
  }

  // Right page: Full content with all sections
  return (
    <div className="content-page-container">
      <div className="page-texture"></div>
      <div className="page-border">
        <div className="right-page-content">
          {/* Chapter reference */}
          <div className="chapter-ref">
            <span>{chapter.title}</span>
          </div>

          {/* Scrollable content area */}
          <div className="content-scroll">
            {/* Main content */}
            <div className="main-content">
              <p className="content-text">{chapter.content}</p>
              
              {chapter.additionalContent && (
                <p className="content-text additional">{chapter.additionalContent}</p>
              )}
            </div>

            {/* Key Points */}
            {chapter.keyPoints && (
              <div className="section key-points-section">
                <h4 className="section-title">Key Responsibilities:</h4>
                <ul className="points-list">
                  {chapter.keyPoints.map((point, idx) => (
                    <li key={idx}>
                      <span className="bullet">❧</span> {point}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Competencies */}
            {chapter.competencies && (
              <div className="section competencies-section">
                <h4 className="section-title">Core Competencies:</h4>
                {chapter.competencies.map((comp, idx) => (
                  <div key={idx} className="competency-item">
                    <h5 className="item-title">{idx + 1}. {comp.title}</h5>
                    <p className="item-desc">{comp.description}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Resources */}
            {chapter.resources && (
              <div className="section resources-section">
                <h4 className="section-title">Learning Resources:</h4>
                {chapter.resources.map((resource, idx) => (
                  <div key={idx} className="resource-item">
                    <h5 className="item-title">• {resource.name}</h5>
                    <p className="item-desc">{resource.description}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Tools */}
            {chapter.tools && (
              <div className="section tools-section">
                <h4 className="section-title">Recommended Tools:</h4>
                {chapter.tools.map((tool, idx) => (
                  <div key={idx} className="tool-item">
                    <h5 className="item-title">{idx + 1}. {tool.name}</h5>
                    <p className="item-use"><strong>Use Case:</strong> {tool.useCase}</p>
                    <p className="item-desc">{tool.application}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Limitations */}
            {chapter.limitations && (
              <div className="section limitations-section">
                <h4 className="section-title">AI Cannot:</h4>
                <ul className="limitations-list">
                  {chapter.limitations.map((limit, idx) => (
                    <li key={idx}>✗ {limit}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Warning */}
            {chapter.warning && (
              <div className="warning-box">
                <span className="warning-icon">⚠</span>
                <p className="warning-text">{chapter.warning}</p>
              </div>
            )}

            {/* Rules */}
            {chapter.rules && (
              <div className="section rules-section">
                <h4 className="section-title">Practical Rules:</h4>
                {chapter.rules.map((rule, idx) => (
                  <div key={idx} className="rule-item">
                    <span className="rule-number">{rule.number}</span>
                    <p className="rule-text">{rule.rule}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Final Words */}
            {chapter.finalWords && (
              <div className="final-words-section">
                <div className="final-ornament">
                  <svg viewBox="0 0 100 20" className="ornament-svg">
                    <path d="M0,10 Q25,0 50,10 Q75,20 100,10" fill="none" stroke="currentColor" strokeWidth="1"/>
                    <circle cx="50" cy="10" r="3" fill="currentColor"/>
                  </svg>
                </div>
                <p className="final-text">{chapter.finalWords}</p>
              </div>
            )}
          </div>

          <div className="decorative-corner top-right"></div>
          <div className="decorative-corner bottom-left"></div>
          <div className="page-number right">{pageNumber}</div>
        </div>
      </div>
    </div>
  );
};

export default ContentPage;
