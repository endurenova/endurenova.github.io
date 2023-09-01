function ProfileList() {
    return (
        <div className="article-list">
            <article className="about-box">
                <img src="./images/profile.jpg" alt=""></img>
                <ul className="about-list">
                    <li className="about-name">
                        <strong>최주원</strong>
                        <span>Choi Juwon</span>
                    </li>
                    <li className="about-info">
                        <ul>
                            <li>
                                <span>Birth</span>
                                <span>1993.10.26</span>
                            </li>
                            <li>
                                <span>Phone</span>
                                <span>010-4593-8054</span>
                            </li>
                            <li>
                                <span>E-mail</span>
                                <span>endurenova@gmail.com</span>
                            </li>
                        </ul>
                    </li>
                </ul>
            </article>
            <article className="history-box">
                <div className="wrap">
                    <h2>Experience</h2>
                    <ul className="experience-list">
                        <li>
                            <span>2023.04 - 2023.07</span>
                            <span>비엔시스템</span>
                            <span>반응형 웹페이지 제작 및 Q.C</span>
                        </li>
                        <li>
                            <span>2019.02 - 2022.04</span>
                            <span>티아이엠텍</span>
                            <span>
                                자동차 A/S부품 공급용 3D카탈로그 제작 및 데이터
                                검토
                            </span>
                        </li>
                        <li>
                            <span>2014.05 - 2016.08</span>
                            <span>파워트로닉스</span>
                            <span>
                                PDU&#40;Power Distribution Unit&#41; 생산 및
                                출하 과정 Q.C
                            </span>
                        </li>
                    </ul>
                </div>
                <hr className="resume-divider" />
                <div className="wrap">
                    <h2>Education</h2>
                    <ul className="education-list">
                        <li>
                            <span>2022.10 - 2023.03 &#40;760h&#41;</span>
                            <span>대우직업능력개발원</span>
                            <span>
                                반응형 웹퍼블리셔
                                양성과정&#40;스마트혼합훈련&#41; 수료
                            </span>
                        </li>
                        <li>
                            <span>2019.07 - 2019.08 &#40;96h&#41;</span>
                            <span>한백산업디자인학원</span>
                            <span>기계설계 2D/3D 실기 양성과정 수료</span>
                        </li>
                        <li>
                            <span>2018.03 - 2018.06 &#40;72h&#41;</span>
                            <span>인덕대학교</span>
                            <span>
                                IDU GOM 취업역량 Skill-up 아카데미 11기 심화반
                                이수
                            </span>
                        </li>
                        <li>
                            <span>2018.01 - 2018.01</span>
                            <span>인덕대학교</span>
                            <span>솔리드웍스 CSWA, CSWP 이수</span>
                        </li>
                        <li>
                            <span>2017.12 - 2018.01 &#40;33h&#41;</span>
                            <span>인덕대학교</span>
                            <span>
                                IDU GOM 취업역량 Skill-up 아카데미 11기 기초반
                                이수
                            </span>
                        </li>
                        <li>
                            <span>2017.01 - 2017.05 &#40;96h&#41;</span>
                            <span>한울귀금속공예전문학원</span>
                            <span>귀금속가공 향상과정 이수</span>
                        </li>
                        <li>
                            <span>2016.09 - 2017.01 &#40;96h&#41;</span>
                            <span>가이아아카데미</span>
                            <span>
                                가공화상품제작향상과정&#40;프리저브드&클레이플라워&#41;
                                이수
                            </span>
                        </li>
                        <li>
                            <span>2014.06 - 2014.06</span>
                            <span>로열핸즈가죽공방</span>
                            <span>미니켈리백 제작과정 이수</span>
                        </li>
                        <li>
                            <span>2011.07 - 2011.12</span>
                            <span>한국꽃예술작가협회</span>
                            <span>동양 꽃꽂이 초급, 중급, 고급과정 수료</span>
                        </li>
                        <li>
                            <span>2011.03 - 2012.01</span>
                            <span>아현산업정보학교</span>
                            <span>화훼조경디자인 수료</span>
                        </li>
                        <li>
                            <span>2010.08 - 2010.12 &#40;94h&#41;</span>
                            <span>경복고등학교</span>
                            <span>음악영재학급 작곡 수료</span>
                        </li>
                    </ul>
                </div>
            </article>
        </div>
    );
}

export default ProfileList;
