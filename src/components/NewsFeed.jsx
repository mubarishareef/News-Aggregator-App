'use client'
import React from 'react'
import { WiDayCloudy } from "react-icons/wi";
import { useStateContext } from '../../context/stateContext';

const NewsFeed = () => {
    const {cityAddress}=useStateContext()
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
                            <div className='reports'>
                                <p>{`${cityAddress?.city},${cityAddress?.state},${cityAddress.country}`}</p>
                            </div>
                            <p>Highest temp : 27°C</p>
                            <p>Lowest temp : 17°C</p>
                            <p>humidity : 35</p>
                            <div className='reports'>
                                <div><WiDayCloudy size={70}/></div>
                                <h5>Cloudy</h5>
                            </div>
                          </div>
                          <h5>Filter News by :</h5>
                          <div id='filters'>
                            <p>Date :</p>
                            <select name="dateFilter" id="">
                                <option value="Newest">Newest</option>
                                <option value="Oldest">Oldest</option>
                            </select>
                          </div>
                          <div id='filters'>
                            <p>Category :</p>
                            <select name="dateFilter" id="">
                                <option value="Newest">Sports</option>
                                <option value="Oldest">General</option>
                            </select>
                          </div>
                      </div>
                  </div>
                
                  <div class="col-lg-8 ">
                            <div class="row g-5">
                                <div class="col-lg-4 border-start custom-border">
                                    <div class="post-entry-1">
                                        <img src="/img/post-landscape-2.jpg" alt="" class="img-fluid" />
                                        <div class="post-meta"><span class="date">Sport</span> <span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                                        <h2>Let’s Get Back to Work, New York</h2>
                                    </div>
                                    <div class="post-entry-1">
                                        <img src="/img/post-landscape-5.jpg" alt="" class="img-fluid" />
                                        <div class="post-meta"><span class="date">Food</span> <span class="mx-1">&bullet;</span> <span>Jul 17th '22</span></div>
                                        <h2>How to Avoid Distraction and Stay Focused During Video Calls?</h2>
                                    </div>
                                    <div class="post-entry-1">
                                        <img src="/img/post-landscape-7.jpg" alt="" class="img-fluid" />
                                        <div class="post-meta"><span class="date">Design</span> <span class="mx-1">&bullet;</span> <span>Mar 15th '22</span></div>
                                        <h2>Why Craigslist Tampa Is One of The Most Interesting Places On the Web?</h2>
                                    </div>
                                </div>
                                <div class="col-lg-4 border-start custom-border">
                                    <div class="post-entry-1">
                                        <img src="/img/post-landscape-3.jpg" alt="" class="img-fluid" />
                                        <div class="post-meta"><span class="date">Business</span> <span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                                        <h2>6 Easy Steps To Create Your Own Cute Merch For Instagram</h2>
                                    </div>
                                    <div class="post-entry-1">
                                        <img src="/img/post-landscape-6.jpg" alt="" class="img-fluid" />
                                        <div class="post-meta"><span class="date">Tech</span> <span class="mx-1">&bullet;</span> <span>Mar 1st '22</span></div>
                                        <h2>10 Life-Changing Hacks Every Working Mom Should Know</h2>
                                    </div>
                                    <div class="post-entry-1">
                                        <img src="/img/post-landscape-8.jpg" alt="" class="img-fluid" />
                                        <div class="post-meta"><span class="date">Travel</span> <span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                                        <h2>5 Great Startup Tips for Female Founders</h2>
                                    </div>
                                </div>

                                <div class="col-lg-4 border-start custom-border">
                                    <div class="post-entry-1">
                                        <img src="/img/post-landscape-2.jpg" alt="" class="img-fluid" />
                                        <div class="post-meta"><span class="date">Sport</span> <span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                                        <h2>Let’s Get Back to Work, New York</h2>
                                    </div>
                                    <div class="post-entry-1">
                                        <img src="/img/post-landscape-5.jpg" alt="" class="img-fluid" />
                                        <div class="post-meta"><span class="date">Food</span> <span class="mx-1">&bullet;</span> <span>Jul 17th '22</span></div>
                                        <h2>How to Avoid Distraction and Stay Focused During Video Calls?</h2>
                                    </div>
                                    <div class="post-entry-1">
                                        <img src="/img/post-landscape-7.jpg" alt="" class="img-fluid" />
                                        <div class="post-meta"><span class="date">Design</span> <span class="mx-1">&bullet;</span> <span>Mar 15th '22</span></div>
                                        <h2>Why Craigslist Tampa Is One of The Most Interesting Places On the Web?</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
          </div>
      </section>
  )
}

export default NewsFeed
