import Link from "next/link";
import { GrOptimize, GrFingerPrint } from "react-icons/gr";
import { MdMoneyOff } from "react-icons/md";
import { DiResponsive } from "react-icons/di";
import { FcDataBackup, FcUpload } from "react-icons/fc";
import Image from "next/image";
import { Typewriter } from 'react-simple-typewriter'

export default function Hero() {
    return (
        <>
            <section className="bg-gray-100">
                <div className="h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex space-x-7">
                            <div>
                                <Link href="/" className="flex items-center py-4 px-2 text-gray-700 hover:text-gray-900">
                                    <Image src="/assets/resume-example.jpg" alt="logo" width={50} height={50} />
                                </Link>
                            </div>
                            <div className="hidden md:flex items-center space-x-1">
                                <Link href="/builder" className="py-4 px-2 text-gray-700 hover:text-gray-900">
                                    Builder
                                </Link>
                                <Link href="/templates" className="py-4 px-2 text-gray-700 hover:text-gray-900">
                                    Templates
                                </Link>
                                <Link href="/examples" className="py-4 px-2 text-gray-700 hover:text-gray-900">
                                    Examples
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center h-full text-center">
                        <h1 className="text-6xl font-bold text-gray-800 mb-2">
                           Buat CV yang Siap Lolos Sistem ATS dan Raih Pekerjaan Impianmu <br />
                            <span className="text-fuchsia-700">
                                <Typewriter
                                    words={['optimized', 'Perfect', 'Professional']}
                                    loop={0}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={100}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </span>
                            <br />
                            Resume.
                        </h1>
                        <p className="text-gray-600 mb-4">
                            cvatsku.web.id adalah solusi terbaik untuk membuat CV profesional yang siap menghadapi sistem pelacakan lamaran (ATS). Dengan teknologi canggih kami, CV Anda akan dianalisis dan dioptimalkan untuk meningkatkan peluang lolos seleksi dan dilirik oleh perusahaan. Tak perlu lagi repot dengan format manual atau membuang waktu, yuk buat CV unggulan Anda di cvatsku.web.id sekarang, dan biarkan perusahaan melihat potensi Anda lebih jelas</p>
                        <Link href="/builder" className="inline-block bg-fuchsia-700 text-fuchsia-600 px-6 py-3 rounded-lg font-bold text-lg hover:bg-fuchsia-600 transition duration-200 hover:-translate-y-1 transform hover:shadow-lg">
                            Buat CV ku
                        </Link>
                    </div>
                </div>
            </section>
            <About />
        </>
    );
}

const About = () => {
    return (
        <section className="bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="mt-12">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">
                        Features
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex bg-fuchsia-600 rounded-lg shadow-lg p-4">
                            <GrOptimize className="text-8xl text-gray-800 mr-4" />
                            <div className="flex flex-col gap-2">
                                <h1 className="text-2xl font-bold text-gray-800">
                                    ATS-optimized
                                </h1>
                                <p className="text-gray-600">
                                    Platform kami menggunakan teknologi terkini untuk menganalisis dan mengoptimalkan CV Anda agar lebih terlihat dan berhasil dengan sistem pelacakan lamaran (ATS).
                                </p>
                            </div>
                        </div>
                        <div className="flex bg-fuchsia-600 rounded-lg shadow-lg p-4">
                            <GrFingerPrint className="text-8xl text-gray-800 mr-4" />
                            <div className="flex flex-col gap-2">
                                <h1 className="text-2xl font-bold text-gray-800">
                                    Easy to use
                                </h1>
                                <p className="text-gray-600">
                                    Antarmuka yang ramah pengguna kami memudahkan Anda untuk membuat CV profesional yang ramah ATS dalam hitungan menit. Tidak ada lagi frustrasi atau waktu terbuang untuk format manual.
                                </p>
                            </div>
                        </div>
                        <div className="flex bg-fuchsia-600 rounded-lg shadow-lg p-4">
                            <MdMoneyOff className="text-8xl text-gray-800 mr-4" />
                            <div className="flex flex-col gap-2">
                                <h1 className="text-2xl font-bold text-gray-800">
                                    Free
                                </h1>
                                <p className="text-gray-600">
                                    Platform kami sepenuhnya gratis untuk digunakan. Tidak ada biaya tersembunyi atau langganan. Cukup buat akun dan mulai bangun CV impian Anda hari ini!
                                </p>
                            </div>
                        </div>
                        <div className="flex bg-fuchsia-600 rounded-lg shadow-lg p-4">
                            <DiResponsive className="text-8xl text-gray-800 mr-4" />
                            <div className="flex flex-col gap-2">
                                <h1 className="text-2xl font-bold text-gray-800">
                                    Mobile-friendly
                                </h1>
                                <p className="text-gray-600">
                                    Platform kami sepenuhnya responsif dan ramah seluler, sehingga Anda bisa membuat CV di mana saja. Tidak perlu lagi menunggu sampai di rumah untuk membuat CV Anda.
                                </p>
                            </div>
                        </div>
                        <div className="flex bg-fuchsia-600 rounded-lg shadow-lg p-4">
                            <FcDataBackup className="text-8xl text-gray-800 mr-4" />
                            <div className="flex flex-col gap-2">
                                <h1 className="text-2xl font-bold text-gray-800">
                                    Download Backup Data
                                </h1>
                                <p className="text-gray-600">
                                    Unduh data CV Anda dalam format JSON dan simpan di tempat yang aman. Anda dapat menggunakan data ini untuk mengembalikan CV Anda di masa depan.
                                </p>
                            </div>
                        </div>
                        <div className="flex bg-fuchsia-600 rounded-lg shadow-lg p-4">
                            <FcUpload className="text-8xl text-gray-800 mr-4" />
                            <div className="flex flex-col gap-2">
                                <h1 className="text-2xl font-bold text-gray-800">
                                    Upload Backup Data
                                </h1>
                                <p className="text-gray-600">
                                    Unggah data CV Anda dalam format JSON untuk mengembalikan CV Anda. Fitur ini berguna jika Anda secara tidak sengaja menghapus CV atau jika Anda ingin berpindah perangkat.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

