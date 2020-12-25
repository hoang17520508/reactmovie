import React, { Component } from 'react'
import "./News.css"

export default class NewsPage extends Component {
    render() {
        return (
            <div>
                <ul class="nav justify-content-center" id="news_nav_links">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Điện ảnh 24h</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Review</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Khuyến mãi</a>
                    </li>
                </ul>

                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-6">
                            <a href="#">
                                <img width="560px" src="./img/imgNews/boc-tem-to-hop-giai-tri-moi-toanh-cua-gioi-ha-thanh.jpg" />
                            </a>
                            <a href="#" id="column_title_text_content">
                                “Bóc tem” tổ hợp giải trí mới toanh của giới Hà Thành
                            </a>
                            <p class="column_descrption_text_content">
                                Vào đúng ngày Nhà giáo Việt Nam 20/11,
                                khu vui chơi sống ảo độc-lạ-chill nhất từ
                                trước đến giờ sẽ chính thức khai trương tại
                                360 Giải Phóng!
                            </p>

                            <div class="icons" id="left-col-icons">
                                <div class="like-icon">
                                    <div>
                                        <img width="30" src="./img/imgNews/like.png"></img>
                                    </div>
                                    <div class="like-count-number">
                                        <p>0</p>
                                    </div>
                                </div>
                                <div class="comment-icon">
                                    <div>
                                        <img width="30" src="./img/imgNews/comment.png"></img>
                                    </div>
                                    <div class="comment-count-number">
                                        <p>0</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <a href="#">
                                <img width="560px" src="./img/imgNews/tiec-trang-mau-chinh-thuc-can-moc-100-ty-chi-sau-2-tuan-cong-chieu.png" />
                            </a>
                            <a href="#" id="column_title_text_content">
                                Tiệc Trăng Máu chính thức cán mốc 100 tỷ chỉ sau 2 tuần công chiếu
                            </a>
                            <p class="column_descrption_text_content">
                                Sau 2 tuần ra mắt, Tiệc Trăng Máu chính
                                thức gia nhập câu lạc bộ phim điện ảnh
                                đạt 100 tỷ đồng doanh thu phòng vé. Dàn
                                ngôi sao “bạc tỷ” của phim cũng lần đầu
                                tiên hội tụ đầy đủ trong một khung hình
                                để ăn mừng thành tích ấn tượng
                            </p>
                            <div class="icons">
                                <div class="like-icon">
                                    <div>
                                        <img width="30" src="./img/imgNews/like.png"></img>
                                    </div>
                                    <div class="like-count-number">
                                        <p>0</p>
                                    </div>
                                </div>
                                <div class="comment-icon">
                                    <div>
                                        <img width="30" src="./img/imgNews/comment.png"></img>
                                    </div>
                                    <div class="comment-count-number">
                                        <p>0</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4" id="sub-news-col1">
                            <a href="#">
                                <img width="365" src="./img/imgNews/ngo-thanh-van-chinh-thuc-khoi-dong-cuoc-thi-thiet-ke-trang-phuc-cho-sieu-anh-hung-dau-tien-cua-viet-nam-vinaman.jpg" />
                            </a>
                            <a class="d-block text-truncate" href="#" id="sub-news-col1-title">
                                NGÔ THANH VÂN CHÍNH THỨC KHỞI ĐỘNG
                                CUỘC THI THIẾT KẾ TRANG PHỤC CHO SIÊU
                                ANH HÙNG ĐẦU TIÊN CỦA VIỆT NAM –
                                VINAMAN
                            </a>
                            <p id="sub-news-col1-text">
                                Chiều tối ngày 30-10-2020, Ngô Thanh Vân và Studio68
                                đã chính thức phát động cuộc thi thiết kế trang phục
                                cho siêu anh hùng VINAMAN với tổng
                            </p>
                            <div class="icons" id="left-col-icons">
                                <div class="like-icon">
                                    <div>
                                        <img width="30" src="./img/imgNews/like.png"></img>
                                    </div>
                                    <div class="like-count-number">
                                        <p>0</p>
                                    </div>
                                </div>
                                <div class="comment-icon">
                                    <div>
                                        <img width="30" src="./img/imgNews/comment.png"></img>
                                    </div>
                                    <div class="comment-count-number">
                                        <p>0</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <a>
                                <img width="365" src="./img/imgNews/antebellum-4-ly-do-khong-the-bo-lo-sieu-pham-kinh-di-antebellum-bay-thuc-tai-kinh-hoang.png" />
                            </a>
                            <a class="d-block text-truncate" href="#" id="sub-news-col2-title">
                                [ANTEBELLUM] - 4 lý do không thể bỏ
                                lỡ siêu phẩm kinh dị Antebellum: Bẫy
                                Thực Tại Kinh Hoàng
                            </a>
                            <p id="sub-news-col2-text">
                                Không đi theo lối mòn máu me, hù dọa
                                mà đầu tư khai thác những mảng tối của
                                xã hội trên nền một câu chuyện kinh dị,
                                có sự tham gia của nhà sản xuất
                            </p>
                            <div class="icons" id="left-col-icons">
                                <div class="like-icon">
                                    <div>
                                        <img width="30" src="./img/imgNews/like.png"></img>
                                    </div>
                                    <div class="like-count-number">
                                        <p>0</p>
                                    </div>
                                </div>
                                <div class="comment-icon">
                                    <div>
                                        <img width="30" src="./img/imgNews/comment.png"></img>
                                    </div>
                                    <div class="comment-count-number">
                                        <p>0</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="row">
                                <div class="col-6" id="sub-news-list-item">
                                    <a href="#">
                                        <img width="50" height="50" src="./img/imgNews/Ác-quỷ-đối-đầu.jpg" />
                                    </a>
                                    <a href="#">
                                        <p class="sub-news-list-item-description">
                                            Ác Quỷ Đối Đầu soán ngôi
                                            Peninsula, trở thành phim
                                            đứng đầu doanh thu tại Hàn
                                            Quốc mùa dịch
                                        </p>
                                    </a>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-6" id="sub-news-list-item">
                                    <a href="#">
                                        <img width="50" height="50" src="./img/imgNews/da-n-my-nhan-trong-the-gio-i-die-n-a-nh-cu-a-qua-i-kie-t-christopher-nolan.png" />
                                    </a>
                                    <a href="#">
                                        <p class="sub-news-list-item-description">
                                            Ác Quỷ Đối Đầu soán ngôi
                                            Peninsula, trở thành phim
                                            đứng đầu doanh thu tại Hàn
                                            Quốc mùa dịch
                                         </p>
                                    </a>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-6" id="sub-news-list-item">
                                    <a href="#">
                                        <img width="50" height="50" src="./img/imgNews/truy-cung-giet-tan-cuoc-tai-ngo-cua-hai-ong-hoang-phong-ve-xu-han.png" />
                                    </a>
                                    <a href="#">
                                        <p class="sub-news-list-item-description">
                                            Ác Quỷ Đối Đầu soán ngôi
                                            Peninsula, trở thành phim
                                            đứng đầu doanh thu tại Hàn
                                            Quốc mùa dịch
                                        </p>
                                    </a>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-6" id="sub-news-list-item">
                                    <a href="#">
                                        <img width="50" height="50" src="./img/imgNews/6-da-o-die-n-ti-do-lam-nen-thanh-cong-cua-nhu-ng-bom-ta-n-di-nh-da-m-nha-t-hollywood.png" />
                                    </a>
                                    <a href="#">
                                        <p class="sub-news-list-item-description">
                                            Ác Quỷ Đối Đầu soán ngôi
                                            Peninsula, trở thành phim
                                            đứng đầu doanh thu tại Hàn
                                            Quốc mùa dịch
                                        </p>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div class="row justify-content-center">
                            <input type="button" class="view-more-button" value="Xem thêm"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}