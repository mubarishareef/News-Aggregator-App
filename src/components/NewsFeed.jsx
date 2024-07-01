'use client'
import React from 'react'
import { useStateContext } from '../../context/stateContext';
// import Image from 'next/image';
import Link from 'next/link';


const NewsFeed = ({newsApiKey,weatherApiKey,locationApiKey}) => {
    const {cityAddress,weather,topHeadlines,redirectToHomePage}=useStateContext()

  return (
      <section id="posts" class="posts">
          <div class="container" data-aos="fade-up">
              <div class="row g-5">

              <div class="col-lg-4">
                      <div class="post-entry-1 lg">
                          {/* <img src="/img/post-landscape-1.jpg" alt="" class="img-fluid" /> */}
                          <div className='weather-card'>
                            <h1>Weather Report</h1>
                            <hr />
                            {cityAddress?<>
                             <div className='reports'>
                                  <p>{`${cityAddress?.city},${cityAddress?.state},${cityAddress.country}`}</p>
                              </div>
                              <p>Highest temp : {(weather.tempMax-273).toFixed(2)}°C</p>
                              <p>Lowest temp : {(weather.tempMin-273).toFixed(2)}°C</p>
                              <p>weather : {weather.weather}</p>
                              <p>{weather.desc}</p>
                              {/* <div className='reports'>
                                  <div><WiDayCloudy size={70} /></div>
                                  <h5>Cloudy</h5>
                              </div> */}
                            </>:
                            <>
                            <a href="/home" onclick={()=>{
                                redirectToHomePage(locationApiKey,weatherApiKey,newsApiKey)
                            }}>refresh</a>
                              <h3>Location Data Missing ..</h3>
                              
                            </>}
                          </div>
                          <h5>Filter News by :</h5>
                          <div id='filters'>
                            <p>Date :</p>
                            <select name="dateFilter" id="">
                                <option value="Newest">Newest</option>
                                <option value="Oldest">Oldest</option>
                            </select>
                          </div>
                          {/* <div id='filters'>
                            <p>Category :</p>
                            <select name="dateFilter" id="">
                                <option value="Newest">Sports</option>
                                <option value="Oldest">General</option>
                            </select>
                          </div> */}
                      </div>
                  </div>
                
                  {topHeadlines &&<div class="col-lg-8 ">
                            <div class="row g-5">
                                <div class="col-lg-4 border-start custom-border">
    
                                    
                                    <div class="post-entry-1">
                                        <img src={topHeadlines[0].urlToImage} alt="" class="img-fluid" width={220} height={170} />
                                        <Link href={topHeadlines[0].url}>Click Here To Read More</Link>
                                        <div class="post-meta"><span class="date">{topHeadlines[0].source.name}</span> <span class="mx-1">&bullet;</span> <span>{topHeadlines[0].publishedAt}</span></div>
                                        <h2>{topHeadlines[0].title}</h2>
                                    </div>
                                    
                                    <div class="post-entry-1">
                                        <img src={topHeadlines[1].urlToImage} alt="" class="img-fluid" width={220} height={170} />
                                        <Link href={topHeadlines[1].url}>Click Here To Read More</Link>
                                        <div class="post-meta"><span class="date">{topHeadlines[1].source.name}</span> <span class="mx-1">&bullet;</span> <span>{topHeadlines[1].publishedAt}</span></div>
                                        <h2>{topHeadlines[1].title}</h2>
                                    </div>
                                    
                                    <div class="post-entry-1">
                                        <img src={topHeadlines[2].urlToImage} alt="" class="img-fluid" width={220} height={170} />
                                        <Link href={topHeadlines[2].url}>Click Here To Read More</Link>
                                        <div class="post-meta"><span class="date">{topHeadlines[2].source.name}</span> <span class="mx-1">&bullet;</span> <span>{topHeadlines[2].publishedAt}</span></div>
                                        <h2>{topHeadlines[2].title}</h2>
                                    </div>
                                </div>
                                <div class="col-lg-4 border-start custom-border">
                                    
                                    <div class="post-entry-1">
                                        <img src={topHeadlines[3].urlToImage} alt="" class="img-fluid" width={220} height={170} />
                                        <Link href={topHeadlines[3].url}>Click Here To Read More</Link>
                                        <div class="post-meta"><span class="date">{topHeadlines[3].source.name}</span> <span class="mx-1">&bullet;</span> <span>{topHeadlines[3].publishedAt}</span></div>
                                        <h2>{topHeadlines[3].title}</h2>
                                    </div>
                                    
                                    <div class="post-entry-1">
                                        <img src={topHeadlines[4].urlToImage} alt="" class="img-fluid" width={220} height={170} />
                                        <Link href={topHeadlines[4].url}>Click Here To Read More</Link>
                                        <div class="post-meta"><span class="date">{topHeadlines[4].source.name}</span> <span class="mx-1">&bullet;</span> <span>{topHeadlines[4].publishedAt}</span></div>
                                        <h2>{topHeadlines[4].title}</h2>
                                    </div>
                                    
                                    <div class="post-entry-1">
                                        <img src={topHeadlines[5].urlToImage} alt="" class="img-fluid" width={220} height={170} />
                                        <Link href={topHeadlines[5].url}>Click Here To Read More</Link>
                                        <div class="post-meta"><span class="date">{topHeadlines[5].source.name}</span> <span class="mx-1">&bullet;</span> <span>{topHeadlines[5].publishedAt}</span></div>
                                        <h2>{topHeadlines[5].title}</h2>
                                    </div>
                                </div>

                                <div class="col-lg-4 border-start custom-border">
                                    
                                    <div class="post-entry-1">
                                        <img src={topHeadlines[6].urlToImage} alt="" class="img-fluid" width={220} height={170} />
                                        <Link href={topHeadlines[6].url}>Click Here To Read More</Link>
                                        <div class="post-meta"><span class="date">{topHeadlines[6].source.name}</span> <span class="mx-1">&bullet;</span> <span>{topHeadlines[6].publishedAt}</span></div>
                                        <h2>{topHeadlines[6].title}</h2>
                                    </div>
                                    
                                    <div class="post-entry-1">
                                        <img src={topHeadlines[7].urlToImage} alt="" class="img-fluid" width={220} height={170} />
                                        <Link href={topHeadlines[7].url}>Click Here To Read More</Link>
                                        <div class="post-meta"><span class="date">{topHeadlines[7].source.name}</span> <span class="mx-1">&bullet;</span> <span>{topHeadlines[7].publishedAt}</span></div>
                                        <h2>{topHeadlines[7].title}</h2>
                                    </div>
                                    
                                    <div class="post-entry-1">
                                        <img src={topHeadlines[8].urlToImage} alt="" class="img-fluid" width={220} height={170} />
                                        <Link href={topHeadlines[8].url}>Click Here To Read More</Link>
                                        <div class="post-meta"><span class="date">{topHeadlines[8].source.name}</span> <span class="mx-1">&bullet;</span> <span>{topHeadlines[8].publishedAt}</span></div>
                                        <h2>{topHeadlines[8].title}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>}
                    </div>
          </div>
      </section>
  )
}

export default NewsFeed
