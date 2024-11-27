import React, { useEffect, useState, useRef } from 'react';
import PageFlip from 'react-pageflip';
import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist/webpack';
import pdfFile from '../../assets/img/DSA_Edition.pdf';
import './FlipBook.css';
 

GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.worker.min.js`;

const Flipbook = () => {
    const [pages, setPages] = useState([]);
    const [pageAspectRatio, setPageAspectRatio] = useState(1); // Default aspect ratio of 1:1 for safety
    const pageFlipRef = useRef(null);
    const [currentPage, setCurrentPage] = useState(0);

    const loadPDF = async () => {
        const loadingTask = getDocument(pdfFile);
        const pdf = await loadingTask.promise;
        const numPages = pdf.numPages;

        const imgPromises = [];
        for (let i = 1; i <= numPages; i++) {
            imgPromises.push(renderPageToImage(pdf, i));
        }
        const imgUrls = await Promise.all(imgPromises);

        if (imgUrls.length % 2 !== 0) {
            imgUrls.push(null); // Adds a blank page if pages are odd
        }

        setPages(imgUrls);
    };

    const renderPageToImage = async (pdf, pageNum) => {
        const page = await pdf.getPage(pageNum);
        const viewport = page.getViewport({ scale: 1 }); // Get the actual aspect ratio

        if (pageNum === 1) {
            setPageAspectRatio(viewport.height / viewport.width); // Set the aspect ratio based on the first page
        }

        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderContext = {
            canvasContext: context,
            viewport: viewport,
        };

        await page.render(renderContext).promise;
        return canvas.toDataURL();
    };

    const handleNext = () => {
        if (pageFlipRef.current) {
            pageFlipRef.current.pageFlip().flipNext();
        }
    };

    const handlePrev = () => {
        if (pageFlipRef.current) {
            pageFlipRef.current.pageFlip().flipPrev();
        }
    };









    // // this code is generate through chatgpt

    // const renderPageToImage = async (pdf, pageNum) => {
    //     const page = await pdf.getPage(pageNum);
    //     const viewport = page.getViewport({ scale: 1.5 }); // Higher scale for better resolution
    
    //     const canvas = document.createElement('canvas');
    //     const context = canvas.getContext('2d');
    //     canvas.width = viewport.width;
    //     canvas.height = viewport.height;
    
    //     const renderContext = {
    //         canvasContext: context,
    //         viewport,
    //     };
    
    //     await page.render(renderContext).promise;
    
    //     return {
    //         src: canvas.toDataURL(),
    //         aspectRatio: viewport.height / viewport.width,
    //     };
    // };
    
    // const loadPDF = async () => {
    //     const loadingTask = getDocument(pdfFile);
    //     const pdf = await loadingTask.promise;
    
    //     const numPages = pdf.numPages;
    //     const pagesWithAspect = [];
    //     for (let i = 1; i <= numPages; i++) {
    //         const page = await renderPageToImage(pdf, i);
    //         pagesWithAspect.push(page);
    //     }
    
    //     // Ensure even number of pages
    //     if (pagesWithAspect.length % 2 !== 0) {
    //         const blankPage = {
    //             src: null,
    //             aspectRatio: pagesWithAspect[0]?.aspectRatio || 1,
    //         };
    //         pagesWithAspect.push(blankPage);
    //     }
    
    //     setPages(pagesWithAspect);
    // };
    
    // const handleNext = () => {
    //     if (pageFlipRef.current && currentPage < pages.length / 2 - 1) {
    //         pageFlipRef.current.pageFlip().flipNext();
    //         setCurrentPage((prev) => prev + 1);
    //     }
    // };
    
    // const handlePrev = () => {
    //     if (pageFlipRef.current && currentPage > 0) {
    //         pageFlipRef.current.pageFlip().flipPrev();
    //         setCurrentPage((prev) => prev - 1);
    //     }
    // };
    

    // end here code chat gpt


 



    const onFlip = (e) => {
        const newPage = e.data;
        if (newPage !== currentPage) {
            setCurrentPage(newPage);
        }
    };

    useEffect(() => {
        loadPDF();
    }, []);
    useEffect(()=>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },[])

    const flipbookHeight = Math.min(window.innerWidth * pageAspectRatio, window.innerHeight * 0.9); // Limit height to 90% of viewport

    return (
        <section className="section-spacing">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="full-screen-container" >
                            <PageFlip
                                ref={pageFlipRef}
                                width={window.innerWidth}
                                height={window.innerHeight}
                                size="fixed"
                                style={{ cursor: "pointer" }}
                                onFlip={onFlip}
                            >
                                {pages.reduce((pairs, page, index) => {
                                    if (index % 2 === 0) {  
                                        const pairedPages = (
                                            <div className="page-pair" key={index}>
                                                <div className="left-page">
                                                    {page ? <img src={page} alt={`Page ${index + 1}`} /> : <div className="page-placeholder" />}
                                                </div>
                                                <div className="right-page">
                                                    {pages[index + 1] ? <img src={pages[index + 1]} alt={`Page ${index + 2}`} /> : <div className="page-placeholder" />}
                                                </div>
                                            </div>
                                        );
                                        pairs.push(pairedPages);
                                    }
                                    return pairs;
                                }, [])}
                            </PageFlip>

                            <div className="pagination align-items-center">
                                <button className="theme-btn theme-btn-bg" onClick={handlePrev} disabled={currentPage === 0}>
                                    Previous
                                </button>
                                <span className="current-page">
                                    Page {currentPage + 1} of {pages.length}
                                </span>
                                <button className="theme-btn theme-btn-bg" onClick={handleNext} disabled={currentPage === pages.length - 1}>
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Flipbook;
