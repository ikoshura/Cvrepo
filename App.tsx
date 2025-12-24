import React, { useRef } from 'react';
import { resumeData } from './data';
import { Resume } from './components/Resume';
import { DownloadIcon } from './components/Icons';

function App() {
  const componentRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-850 py-8 px-4 sm:px-6 lg:px-8 print:p-0 print:bg-white">
      {/* Navigation / Actions - Hidden when printing */}
      <nav className="max-w-[210mm] mx-auto mb-6 flex justify-between items-center print:hidden text-white">
        <div>
          <h1 className="text-xl font-bold">Resume Preview</h1>
          <p className="text-slate-400 text-sm">Review content before downloading.</p>
        </div>
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full font-medium transition-all shadow-lg hover:shadow-xl active:scale-95"
        >
          <DownloadIcon className="w-5 h-5" />
          Download PDF
        </button>
      </nav>

      {/* 
        A4 Container 
        Standard A4 is 210mm x 297mm. 
        We use min-h-[297mm] to visualize it.
        Shadow and white background make it look like paper.
      */}
      <div className="max-w-[210mm] mx-auto print:max-w-none print:w-full">
        <div className="bg-white shadow-2xl print:shadow-none p-[15mm] sm:p-[20mm] md:p-[25mm] print:p-0 min-h-[297mm]">
          <Resume data={resumeData} />
        </div>
      </div>

      {/* Footer - Hidden when printing */}
      <footer className="max-w-[210mm] mx-auto mt-12 text-center text-slate-500 text-sm print:hidden pb-8">
        <p>
          Generated for Abrar Zharifan Syah. <br/>
          Use the <strong>"Save as PDF"</strong> option in the print dialog.
        </p>
      </footer>
    </div>
  );
}

export default App;