import React, { useState, createContext, useContext } from "react";
import Language from "../components/form/Language";
import Meta from "../components/meta/Meta";
import FormCP from "../components/form/FormCP";
import LoadUnload from "../components/form/LoadUnload";
import Preview from "../components/preview/Preview";
import DefaultResumeData from "../components/utility/DefaultResumeData";
import SocialMedia from "../components/form/SocialMedia";
import WorkExperience from "../components/form/WorkExperience";
import Skill from "../components/form/Skill";
import PersonalInformation from "../components/form/PersonalInformation";
import Summary from "../components/form/Summary";
import Projects from "../components/form/Projects";
import Education from "../components/form/Education";
import dynamic from "next/dynamic";
import Certification from "../components/form/certification";

const ResumeContext = createContext(DefaultResumeData);

// server side rendering false
const Print = dynamic(() => import("../components/utility/WinPrint"), {
  ssr: false,
});

export default function Builder(props) {
  // resume data
  const [resumeData, setResumeData] = useState(DefaultResumeData);

  // form hide/show
  const [formClose, setFormClose] = useState(false);

  // profile picture
  const handleProfilePicture = (e) => {
    const file = e.target.files[0];

    if (file instanceof Blob) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setResumeData({ ...resumeData, profilePicture: event.target.result });
      };
      reader.readAsDataURL(file);
    } else {
      console.error("Invalid file type");
    }
  };

  const handleChange = (e) => {
    setResumeData({ ...resumeData, [e.target.name]: e.target.value });
    console.log(resumeData);
  };

  return (
    <>
      <ResumeContext.Provider
        value={{
          resumeData,
          setResumeData,
          handleProfilePicture,
          handleChange,
        }}
      >
        <Meta
          title="CVATSku | Buat CV ATS Profesional, Gratis! Siap Lolos Seleksi"
          description="cvatsku adalah pembuat CV canggih yang membantu pencari kerja membuat CV profesional yang ramah ATS dalam hitungan menit. Platform kami menggunakan teknologi terbaru untuk menganalisis dan mengoptimalkan CV Anda agar memiliki visibilitas maksimal dan sukses di sistem pelacakan lamaran. Ucapkan selamat tinggal pada frustrasi dan waktu yang terbuang untuk format manual CV. Buat CV pemenang Anda dengan cvatsku hari ini dan dapatkan perhatian dari perusahaan."
          keywords="ramah ATS, ats friendly, bikin cv ats, optimasi CV, CV kaya kata kunci, sistem pelacakan lamaran, pembuat CV ATS, template CV ATS, CV sesuai ATS, CV dioptimalkan ATS, format ramah ATS, tips CV ATS, layanan penulisan CV, panduan karier, pencarian kerja di Indonesia, tips CV untuk Indonesia, pembuat CV profesional, penulisan surat lamaran, persiapan wawancara, tips wawancara kerja, pertumbuhan karier, aplikasi pekerjaan online, pembuat CV gratis, pembuat CV ATS, pembuat CV terbaik gratis, pembuat CV, desain CV, editor CV, pembuat surat lamaran"
      />
        <div className="f-col gap-4 md:flex-row justify-evenly max-w-7xl md:mx-auto md:h-screen">
          {!formClose && (
            <form className="p-4 bg-cyan-600 exclude-print md:max-w-[40%] md:h-screen md:overflow-y-scroll">
              
      <div className="mt-4 flex flex-col items-center">
        <a href="https://cvatsku.web.id" target="_blank" rel="noopener noreferrer">
          <img 
            src="https://cvatsku.vercel.app/assets/logoats.png" 
            alt="cvatsku.web.id" 
            className="max-w-full h-auto" 
          />
        </a>
        <p className="mt-2 text-center">CVATSKU.web.id</p><br/>
          <a href="https://lynk.id/itwithkhafid/eO9E1KA" target="_blank" 
   style="background: linear-gradient(to right, rgb(0, 255, 255), rgb(0, 204, 204)); color: white; padding: 10px; text-decoration: none;" 
   rel="noopener noreferrer">
    Klik untuk Akses Kelas Excel Word PPT Lengkap</a>
      </div>

              <LoadUnload/>
              <PersonalInformation />
              <SocialMedia />
              <Summary />
              <Education />
              <WorkExperience />
              <Projects />
              {
                resumeData.skills.map((skill, index) => (
                  <Skill
                    title={skill.title}
                    key={index}
                  />
                ))
              }
              <Language />
              <Certification />
            </form>
          )}
          <Preview />
        </div>
        <FormCP formClose={formClose} setFormClose={setFormClose} />
        <Print />
      </ResumeContext.Provider>
    </>
  );
}
export { ResumeContext };
