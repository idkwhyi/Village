import './Announcement.css'
import Navbar from '../../components/Navbar';
import petaniRungkad from "../../images/image4.jpeg"
import ciliwung from "../../images/image3.jpeg"
import lahanAncur from "../../images/image2.jpg"
import wargaBerlulah from "../../images/image5.jpeg"
import users from "../../images/user.jpeg"

const Announcement = () => {
    return (
        <div className='container'>
            <Navbar />
            <div className="post">
                {/* Post 1 */}
                <div className="post-box tech">
                    <img
                        src={lahanAncur}
                        alt=""
                        className="post-img"
                    />
                    <h2 className="category">kalasey wisata</h2>
                    <a href="#" className="post-title">
                        Lahan Kebun Digusur, Ratusan Warga Kalasey Dua, Minahasa, Bentrok
                        dengan Kepolisian
                    </a>
                    <span className="post-date">12 Feb 2022</span>
                    <p className="post-description">
                        Penggusuran paksa kebun masyarakat memicu bentrokan antara warga dan
                        kepolisian di Desa Kalasey Dua, Minahasa, Sulawesi Utara. Pemerintah
                        provinsi dituntut menghentikan eksekusi lahan calon lokasi
                        Politeknik Pariwisata Manado itu selagi proses hukum berlangsung.
                    </p>
                    <a
                        href="https://www.kompas.id/baca/nusantara/2022/11/07/lahan-kebun-digusur-ratusan-warga-kalasey-dua-minahasa-bentrok-dengan-kepolisian"
                        className="read-more"
                    >
                        Selengakpnya
                    </a>
                    <div className="profile">
                        <img
                            src={users}
                            alt=""
                            className="profile-img"
                        />
                        <span className="profile-name">Silvan Handrew Novarianto</span>
                    </div>
                </div>

                {/* Post 2 */}
                <div className="post-box tech">
                    <img
                        src={petaniRungkad}
                        alt=""
                        className="post-img"
                    />
                    <h2 className="category">Makanan</h2>
                    <a href="#" className="post-title">
                        Kisah Petani Kalasey Dua Mempertahankan Kebun Terakhir
                    </a>
                    <span className="post-date">12 Feb 2022</span>
                    <p className="post-description">
                        Senin, 7 November 2022 adalah hari yang cukup cerah di Desa Kalasey,
                        Kabupaten Minahasa. Sekitar pukul 06.00 WITA, puluhan petani sudah
                        berjaga dan berkumpul di posko Solidaritas Petani Penggarap Kalasey
                        Dua (SOLIPETRA)
                    </p>
                    <a
                        href="https://ylbhi.or.id/publikasi/artikel/kisah-petani-kalasey-dua-mempertahankan-kebun-terakhir/"
                        className="read-more"
                    >
                        Selengakpnya
                    </a>
                    <div className="profile">
                        <img
                            src={users}
                            alt=""
                            className="profile-img"
                        />
                        <span className="profile-name">Silvan Handrew Novarianto</span>
                    </div>
                </div>

                {/* Post 3 */}
                <div className="post-box food">
                    <img
                        src={ciliwung}
                        alt=""
                        className="post-img"
                    />
                    <h2 className="category">Fenomena</h2>
                    <a href="#" className="post-title">
                        Amanat Penderitaan Rakyat Kalasey 2
                    </a>
                    <span className="post-date">12 Feb 2022</span>
                    <p className="post-description">
                        kemanusiaan Sandyawan Sumardi dan YLBHI berbagi informasi bahwa pada
                        tanggal 3 November 2022, di Desa Kalasey Dua, Minahasa, telah
                        terjadi penggusuran paksa oleh ratusan aparat kepolisian di lahan
                        garapan petani Desa Kalasey Dua.
                    </p>
                    <a
                        href="https://regional.kompas.com/read/2022/11/10/053000478/amanat-penderitaan-rakyat-kalasey-dua"
                        className="read-more"
                    >
                        Selengakpnya
                    </a>
                    <div className="profile">
                        <img
                            src={users}
                            alt=""
                            className="profile-img"
                        />
                        <span className="profile-name">Silvan Handrew Novarianto</span>
                    </div>
                </div>

                {/* Post 4 */}
                <div className="post-box news">
                    <img
                        src={wargaBerlulah}
                        alt=""
                        className="post-img"
                    />
                    <h2 className="category">News</h2>
                    <a href="#" className="post-title">
                        Gusur Lahan Petani di Minahasa, Menparekraf Hingga Polisi Diduga
                        Langgar HAM
                    </a>
                    <span className="post-date">12 Feb 2022</span>
                    <p className="post-description">
                        Direktur LBH Manado, Frank Tyson Kahiking mengatakan dugaan
                        pelanggaran HAM dilakukan secara bersama-sama atau sendiri-sendiri
                        oleh Gubernur Provinsi Sulawesi Utara,
                    </p>
                    <a
                        href="https://www.suara.com/news/2022/11/09/184916/gusur-lahan-petani-di-minahasa-menparekraf-hingga-polisi-diduga-langgar-ham"
                        className="read-more"
                    >
                        Selengakpnya
                    </a>
                    <div className="profile">
                        <img
                            src={users}
                            alt=""
                            className="profile-img"
                        />
                        <span className="profile-name">Silvan Handrew Novarianto</span>
                    </div>
                </div>

                {/* Post 5 */}
                {/* <div className="post-box tech">
          <img
            src="images/maninder-sidhu-pQIj3ZDic_M-unsplash.jpg"
            alt=""
            className="post-img"
          />
          <h2 className="category">woi</h2>
          <a href="#" className="post-title">
            evan
          </a>
          <span className="post-date">12 Feb 2022</span>
          <p className="post-description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consectetur, similique, rerum excepturi harum, vitae facilis
            corrupti vel modi debitis est perferendis aut quasi ea unde
            repudiandae iste architecto. Corporis, voluptates.
          </p>
          <a href="#" className="read-more">
            Selengakpnya
          </a>
          <div className="profile">
            <img
              src="images/minecraft-village.png"
              alt=""
              className="profile-img"
            />
            <span className="profile-name">MKHB</span>
          </div>
        </div> */}

                {/* Post 6 */}
                {/* <div className="post-box news">
          <img
            src="images/maninder-sidhu-pQIj3ZDic_M-unsplash.jpg"
            alt=""
            className="post-img"
          />
          <h2 className="category">woi</h2>
          <a href="#" className="post-title">
            evan
          </a>
          <span className="post-date">12 Feb 2022</span>
          <p className="post-description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consectetur, similique, rerum excepturi harum, vitae facilis
            corrupti vel modi debitis est perferendis aut quasi ea unde
            repudiandae iste architecto. Corporis, voluptates.
          </p>
          <a href="#" className="read-more">
            Selengakpnya
          </a>
          <div className="profile">
            <img
              src="images/minecraft-village.png"
              alt=""
              className="profile-img"
            />
            <span className="profile-name">MKHB</span>
          </div>
        </div> */}

                {/* Post 7 */}
                {/* <div className="post-box tech">
          <img
            src="images/maninder-sidhu-pQIj3ZDic_M-unsplash.jpg"
            alt=""
            className="post-img"
          />
          <h2 className="category">woi</h2>
          <a href="#" className="post-title">
            sdd
          </a>
          <span className="post-date">12 Feb 2022</span>
          <p className="post-description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consectetur, similique, rerum excepturi harum, vitae facilis
            corrupti vel modi debitis est perferendis aut quasi ea unde
            repudiandae iste architecto. Corporis, voluptates.
          </p>
          <a href="#" className="read-more">Selengakpnya</a>
          <div className="profile">
            <img
              src="images/minecraft-village.png"
              alt=""
              className="profile-img"
            />
            <span className="profile-name">MKHB</span>
          </div>
        </div> */}
            </div>
        </div>
    );
}

export default Announcement