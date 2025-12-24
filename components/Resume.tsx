import React from 'react';
import { ResumeData } from '../types';
import { MailIcon, PhoneIcon, MapPinIcon, LinkedinIcon, GithubIcon, ExternalLinkIcon } from './Icons';

interface ResumeProps {
  data: ResumeData;
  className?: string;
  forwardedRef?: React.Ref<HTMLDivElement>;
}

export const Resume: React.FC<ResumeProps> = ({ data, className, forwardedRef }) => {
  return (
    <div ref={forwardedRef} className={`bg-white text-gray-800 ${className} print:w-full`}>
      {/* Header / Contact */}
      <header className="border-b-2 border-gray-800 pb-6 mb-6 break-inside-avoid">
        <h1 className="text-4xl font-bold uppercase tracking-wider text-gray-900 mb-2">{data.name}</h1>
        <h2 className="text-xl font-medium text-gray-600 mb-4">{data.title}</h2>
        
        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1.5">
            <MapPinIcon className="w-4 h-4" />
            <span>{data.contact.location}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <PhoneIcon className="w-4 h-4" />
            <span>{data.contact.phone}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MailIcon className="w-4 h-4" />
            <a href={`mailto:${data.contact.email}`} className="hover:text-blue-600 transition-colors">{data.contact.email}</a>
          </div>
          {data.contact.linkedin && (
            <div className="flex items-center gap-1.5">
              <LinkedinIcon className="w-4 h-4" />
              <a href={`https://${data.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                {data.contact.linkedin}
              </a>
            </div>
          )}
          {data.contact.github && (
            <div className="flex items-center gap-1.5">
              <GithubIcon className="w-4 h-4" />
              <a href={`https://${data.contact.github}`} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                {data.contact.github}
              </a>
            </div>
          )}
        </div>
      </header>

      {/* Main Layout: 2 Columns */}
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] print:grid-cols-[2fr_1fr] gap-8">
        
        {/* Left Column (Main Content) */}
        <div className="space-y-6">
          
          {/* Summary */}
          <section className="break-inside-avoid">
            <h3 className="text-sm font-bold uppercase tracking-widest border-b border-gray-300 pb-1 mb-3 text-gray-900">
              Profile
            </h3>
            <p className="text-sm leading-relaxed text-gray-700 text-justify">
              {data.summary}
            </p>
          </section>

          {/* Experience / Projects */}
          <section>
            <h3 className="text-sm font-bold uppercase tracking-widest border-b border-gray-300 pb-1 mb-4 text-gray-900 break-inside-avoid">
              Selected Projects
            </h3>
            <div className="space-y-5">
              {data.projects.map((project, index) => (
                <div key={index} className="break-inside-avoid">
                  <div className="flex justify-between items-baseline mb-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-gray-800">{project.project}</h4>
                      {project.link && (
                        <a href={`https://${project.link}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 print:hidden">
                          <ExternalLinkIcon className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                    <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded print:bg-transparent print:p-0">
                      {project.period}
                    </span>
                  </div>
                  <div className="text-sm font-medium text-blue-700 mb-1">{project.role}</div>
                  <p className="text-sm text-gray-700 leading-relaxed mb-2">
                    {project.description}
                  </p>
                  {project.technologies && (
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="text-[10px] uppercase font-semibold text-gray-500 border border-gray-200 px-1.5 py-0.5 rounded print:border-gray-400">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* Right Column (Sidebar) */}
        <div className="space-y-6">

          {/* Skills */}
          <section className="break-inside-avoid">
            <h3 className="text-sm font-bold uppercase tracking-widest border-b border-gray-300 pb-1 mb-3 text-gray-900">
              Skills
            </h3>
            <div className="space-y-4">
              {data.skills.map((skillGroup, index) => (
                <div key={index} className="break-inside-avoid">
                  <h4 className="text-xs font-bold text-gray-500 uppercase mb-1.5">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((item, i) => (
                      <span key={i} className="text-sm text-gray-800 bg-gray-100 px-2 py-1 rounded print:bg-transparent print:p-0 print:border print:border-gray-300 print:text-xs">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="break-inside-avoid">
            <h3 className="text-sm font-bold uppercase tracking-widest border-b border-gray-300 pb-1 mb-3 text-gray-900">
              Education
            </h3>
            <div className="space-y-4">
              {data.education.map((edu, index) => (
                <div key={index} className="break-inside-avoid">
                  <h4 className="font-bold text-gray-800 text-sm">{edu.institution}</h4>
                  <div className="text-sm text-gray-700">{edu.degree}</div>
                  {edu.gpa && <div className="text-sm text-gray-600 italic">GPA: {edu.gpa}</div>}
                  <div className="text-xs text-gray-500 mt-1">{edu.location}</div>
                </div>
              ))}
            </div>
          </section>

           {/* Languages */}
           <section className="break-inside-avoid">
            <h3 className="text-sm font-bold uppercase tracking-widest border-b border-gray-300 pb-1 mb-3 text-gray-900">
              Languages
            </h3>
            <div className="space-y-2">
              {data.languages.map((lang, index) => (
                <div key={index} className="break-inside-avoid">
                  <div className="flex justify-between items-baseline">
                    <span className="font-medium text-sm text-gray-800">{lang.language}</span>
                  </div>
                  <span className="text-xs text-gray-600">{lang.proficiency}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Certificates */}
          <section className="break-inside-avoid">
            <h3 className="text-sm font-bold uppercase tracking-widest border-b border-gray-300 pb-1 mb-3 text-gray-900">
              Certificates
            </h3>
            <ul className="space-y-3">
              {data.certificates.map((cert, index) => (
                <li key={index} className="text-sm break-inside-avoid">
                  <div className="font-medium text-gray-800 leading-tight">{cert.name}</div>
                  <div className="text-gray-600 text-xs mt-0.5">{cert.issuer}</div>
                </li>
              ))}
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
};