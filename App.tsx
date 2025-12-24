import React from 'react';
import { resumeData } from './data';
import { Resume } from './components/Resume';
import { DownloadIcon } from './components/Icons';

function App() {
  const handleDownload = () => {
    // We use window.print() because it generates a Vector PDF (text is selectable).
    // This is crucial for ATS systems. Libraries like html2pdf create images,
    // which ATS cannot read.
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-850 py-8 px-4 sm:px-6 lg:px-8 print:p-0 print:bg-white print:min-h-0">
      {/* Navigation / Actions - Hidden when printing */}
      <nav className="max-w-[210mm] mx-auto mb-6 flex flex-col sm:flex-row justify-between items-center gap-4 print:hidden text-white">
        <div>
          <h1 className="text-xl font-bold">Resume Preview</h1>
          <p className="text-slate-400 text-sm">Review content before downloading.</p>
        </div>
        <div>
          <button
            onClick={handleDownload}
            type="button"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full font-medium transition-all shadow-lg hover:shadow-xl active:scale-95"
          >
            <DownloadIcon className="w-5 h-5" />
            Download PDF (ATS Friendly)
          </button>
        </div>
      </nav>

      {/* 
        A4 Container 
        On Screen: Simulates A4 paper with explicit dimensions and shadow.
        On Print: Removes restrictions to allow browser pagination to handle overflow naturally.
      */}
      <div className="max-w-[210mm] mx-auto print:max-w-none print:w-full">
        <div id="resume-content" className="bg-white shadow-2xl print:shadow-none p-[15mm] sm:p-[20mm] print:p-0 min-h-[297mm] print:min-h-0 print:h-auto overflow-hidden print:overflow-visible">
          <Resume data={resumeData} />
        </div>
      </div>

      {/* Footer - Hidden when printing */}
      <footer className="max-w-[210mm] mx-auto mt-12 text-center text-slate-500 text-sm print:hidden pb-8">
        <p>
          <strong>Tip:</strong> In the print dialog, ensure <strong>"Save as PDF"</strong> is selected.<br />
          In "More settings", uncheck "Headers and footers" for a clean look.
        </p>
      </footer>
    </div>
  );
}

export default App;