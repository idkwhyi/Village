import imgAbout from "../images/house2.jpg"

const About = () => {
    return (
        <div className="h-[70vh] flex pt-32 m-16 mb-64 gap-16 items-start justify-center">
            <div className="flex-col pt-10">
                <h1 className="text-[40px] font-bold mb-6">Profil Desa</h1>
                <div className="justify-center">Desa Kalasey, yang terletak di Minahasa Utara, Sulawesi Utara, mencerminkan pesona kehidupan pedesaan di Indonesia dengan kekayaan budaya dan keindahan alamnya. Desa ini dikenal karena persawahan yang luas dan indah, serta air yang jernih dan segar berasal dari pegunungan desa ini. Keindahan alam sekitarnya, termasuk perbukitan hijau dan sawah yang subur, memberikan sentuhan yang memukau pada lanskap desa. Desa Kalasey menjadi tempat di mana komunitasnya tumbuh dan berkembang, menciptakan ikatan kuat antara penduduknya serta menyajikan pengalaman yang autentik bagi para pengunjung yang ingin menjelajahi keberagaman dan keindahan Indonesia yang kaya akan budaya dan alam.</div>
            </div>
            <img className="w-[750px] h-auto rounded-[15px] bg-contain bg-no-repeat shadow-xl" src={imgAbout} alt="Aboutimage"/>
        </div>
    )
}

export default About