import React, { useRef, useCallback, useState, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { motion } from 'framer-motion';
import { bookContent } from '../data/bookContent';
import { illustrations } from '../data/illustrations';
import CoverPage from './CoverPage';
import ContentPage from './ContentPage';
import TableOfContents from './TableOfContents';
import BackCover from './BackCover';
import NavigationControls from './NavigationControls';
import './Book.css';

// Wrapper component for pages (required by react-pageflip)
const Page = React.forwardRef((props, ref) => {
  return (
    <div className={`page ${props.className || ''}`} ref={ref} data-density={props.density}>
      {props.children}
    </div>
  );
});

const Book = () => {
  const bookRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 500, height: 700 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const viewportHeight = window.innerHeight;
      const viewportWidth = window.innerWidth;
      const isLandscape = viewportWidth > viewportHeight;
      
      // Breakpoints
      const isSmallMobile = viewportWidth < 400;
      const isMobilePortrait = viewportWidth < 600;
      const isMobileLandscape = viewportWidth < 900 && isLandscape;
      const isTablet = viewportWidth < 1024;
      const mobile = viewportWidth < 768 || (viewportWidth < 900 && isLandscape);
      
      setIsMobile(mobile);
      
      if (isSmallMobile) {
        // Very small screens
        const w = viewportWidth - 20;
        const h = Math.min(viewportHeight - 140, w * 1.4);
        setDimensions({ width: Math.round(w), height: Math.round(h) });
      } else if (isMobilePortrait) {
        // Mobile portrait
        const w = Math.min(viewportWidth - 30, 380);
        const h = Math.min(viewportHeight - 160, w * 1.4);
        setDimensions({ width: Math.round(w), height: Math.round(h) });
      } else if (isMobileLandscape) {
        // Mobile/tablet landscape - single page but bigger
        const h = viewportHeight - 120;
        const w = Math.min(h * 0.72, viewportWidth - 60);
        setDimensions({ width: Math.round(w), height: Math.round(h) });
      } else if (isTablet) {
        // Tablet - two pages
        const availableWidth = viewportWidth - 60;
        const availableHeight = viewportHeight - 180;
        const pageRatio = 0.72;
        let pageHeight = Math.min(availableHeight, 700);
        let pageWidth = pageHeight * pageRatio;
        
        if (pageWidth * 2 > availableWidth) {
          pageWidth = availableWidth / 2;
          pageHeight = pageWidth / pageRatio;
        }
        
        setDimensions({ 
          width: Math.round(pageWidth), 
          height: Math.round(pageHeight) 
        });
      } else {
        // Desktop: two pages side by side - each page width
        const availableWidth = viewportWidth - 100;
        const availableHeight = viewportHeight - 180;
        
        // Each page should be this size (book shows 2 pages)
        const pageRatio = 0.72; // width/height ratio for each page
        let pageHeight = Math.min(availableHeight, 850);
        let pageWidth = pageHeight * pageRatio;
        
        // Make sure two pages fit horizontally
        if (pageWidth * 2 > availableWidth) {
          pageWidth = availableWidth / 2;
          pageHeight = pageWidth / pageRatio;
        }
        
        setDimensions({ 
          width: Math.round(pageWidth), 
          height: Math.round(pageHeight) 
        });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const onFlip = useCallback((e) => {
    setCurrentPage(e.data);
  }, []);

  const onInit = useCallback((e) => {
    setTotalPages(e.data.pageCount);
  }, []);

  const goToPage = (pageIndex) => {
    if (bookRef.current) {
      bookRef.current.pageFlip().turnToPage(pageIndex);
    }
  };

  const nextPage = () => {
    if (bookRef.current && !isFlipping) {
      setIsFlipping(true);
      bookRef.current.pageFlip().flipNext();
      setTimeout(() => setIsFlipping(false), 600);
    }
  };

  const prevPage = () => {
    if (bookRef.current && !isFlipping) {
      setIsFlipping(true);
      bookRef.current.pageFlip().flipPrev();
      setTimeout(() => setIsFlipping(false), 600);
    }
  };

  // Generate all content pages
  const renderContentPages = () => {
    const pages = [];
    let pageNum = 4; // Começa em 4: capa(1), interior capa(2), índice(3), conteúdo(4+)
    
    bookContent.chapters.forEach((chapter, chapterIndex) => {
      // Left page: Title, illustration
      pages.push(
        <Page key={`ch${chapterIndex}-left`} className="content-page">
          <ContentPage 
            chapter={chapter} 
            illustration={illustrations[chapter.image]}
            isLeft={true}
            pageNumber={pageNum++}
          />
        </Page>
      );
      
      // Right page: Full content
      pages.push(
        <Page key={`ch${chapterIndex}-right`} className="content-page">
          <ContentPage 
            chapter={chapter}
            isLeft={false}
            pageNumber={pageNum++}
          />
        </Page>
      );
    });
    
    return pages;
  };

  return (
    <div className="book-container">
      <motion.div 
        className="book-stage"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="book-shadow"></div>
        
        <HTMLFlipBook
          ref={bookRef}
          width={dimensions.width}
          height={dimensions.height}
          size="fixed"
          minWidth={280}
          maxWidth={600}
          minHeight={400}
          maxHeight={850}
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={true}
          onFlip={onFlip}
          onInit={onInit}
          className="book"
          startPage={0}
          drawShadow={true}
          flippingTime={600}
          usePortrait={isMobile}
          startZIndex={0}
          autoSize={false}
          clickEventForward={true}
          useMouseEvents={true}
          swipeDistance={30}
          showPageCorners={true}
          disableFlipByClick={false}
        >
          {/* Cover - página única centralizada */}
          <Page key="cover" className="cover-page" density="hard">
            <CoverPage 
              title={bookContent.title} 
              subtitle={bookContent.subtitle}
              author={bookContent.author}
            />
          </Page>

          {/* Página interna da capa (em branco decorativa) */}
          <Page key="cover-inside" className="toc-page">
            <div className="inside-cover">
              <div className="inside-cover-ornament">✦</div>
              <p className="inside-cover-text">AI Survival Kit for Professionals</p>
              <div className="inside-cover-ornament">✦</div>
            </div>
          </Page>

          {/* Table of Contents */}
          <Page key="toc" className="toc-page">
            <TableOfContents 
              chapters={bookContent.chapters} 
              onChapterClick={(index) => goToPage(index * 2 + 3)}
            />
          </Page>

          {/* All Content Pages */}
          {renderContentPages()}

          {/* Back Cover */}
          <Page key="back-cover" className="back-cover-page" density="hard">
            <BackCover author={bookContent.author} />
          </Page>
        </HTMLFlipBook>

        <NavigationControls 
          currentPage={currentPage}
          totalPages={totalPages}
          onNext={nextPage}
          onPrev={prevPage}
          onGoToPage={goToPage}
        />
      </motion.div>

      <motion.div 
        className="page-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <span>Página {currentPage + 1} de {totalPages}</span>
      </motion.div>
    </div>
  );
};

export default Book;
