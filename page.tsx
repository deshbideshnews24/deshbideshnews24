'use client';
import { useState } from 'react';

const categories = ['সর্বশেষ', 'বাংলাদেশ', 'আন্তর্জাতিক', 'অর্থনীতি', 'খেলাধুলা', 'বিনোদন', 'প্রযুক্তি', 'শিক্ষা', 'চাকরির খবর', 'ধর্ম ও জীবনযাপন'];
const stories = [
  {category:'বাংলাদেশ',time:'সর্বশেষ আপডেট',title:'দেশ-বিদেশের গুরুত্বপূর্ণ খবর জানতে চোখ রাখুন আমাদের সঙ্গে',desc:'জাতীয় ও স্থানীয় পর্যায়ের নির্ভরযোগ্য সংবাদ, বিশ্লেষণ এবং গুরুত্বপূর্ণ আপডেট এক জায়গায়।',tag:'প্রধান সংবাদ'},
  {category:'আন্তর্জাতিক',time:'সংবাদ বিভাগ',title:'বিশ্বের নানা প্রান্তের গুরুত্বপূর্ণ ঘটনাবলির আপডেট',desc:'আন্তর্জাতিক অঙ্গনের উল্লেখযোগ্য ঘটনা ও প্রাসঙ্গিক তথ্য সহজ ভাষায়।',tag:'বিশ্ব সংবাদ'},
  {category:'অর্থনীতি',time:'সংবাদ বিভাগ',title:'অর্থনীতি, বাজার ও ব্যবসা-বাণিজ্যের খবর',desc:'অর্থনীতি ও ব্যবসা-বাণিজ্য বিষয়ে প্রয়োজনীয় সংবাদ ও ব্যাখ্যা।',tag:'অর্থনীতি'},
  {category:'খেলাধুলা',time:'সংবাদ বিভাগ',title:'দেশ-বিদেশের খেলার মাঠের খবর',desc:'ক্রিকেট, ফুটবলসহ বিভিন্ন খেলার খবর ও ফলাফল।',tag:'খেলাধুলা'},
  {category:'প্রযুক্তি',time:'সংবাদ বিভাগ',title:'প্রযুক্তি ও উদ্ভাবনের নতুন খবর',desc:'ডিজিটাল দুনিয়া, বিজ্ঞান ও প্রযুক্তির সাম্প্রতিক সংবাদ।',tag:'প্রযুক্তি'},
  {category:'শিক্ষা',time:'সংবাদ বিভাগ',title:'শিক্ষা, পরীক্ষা ও ভর্তি সংক্রান্ত আপডেট',desc:'শিক্ষার্থী ও অভিভাবকদের জন্য প্রয়োজনীয় তথ্যভিত্তিক সংবাদ।',tag:'শিক্ষা'}
];
export default function Home() {
 const [english,setEnglish] = useState(false); const [active,setActive] = useState('সর্বশেষ'); const [search,setSearch] = useState('');
 const shown = stories.filter(s => (active==='সর্বশেষ'||s.category===active) && (s.title+s.desc+s.category).toLowerCase().includes(search.toLowerCase()));
 return <main>
  <div className="topline"><div className="wrap toplinein"><span>বাংলাদেশ ও বিশ্বের সর্বশেষ সংবাদ</span><span>শনিবার, ১৪ নভেম্বর ২০২৬</span></div></div>
  <header className="masthead wrap"><div className="brand"><div className="mark">দেশ</div><div><h1>{english?'DESHBIDESH NEWS 24':'দেশ-বিদেশের সকল খবর'}</h1><p>DESHBIDESH NEWS 24</p></div></div><div className="header-actions"><button className="lang" onClick={()=>setEnglish(!english)}>{english?'বাংলা':'English'}</button></div></header>
  <nav className="nav"><div className="wrap navinner">{categories.map(c=><button key={c} className={active===c?'selected':''} onClick={()=>setActive(c)}>{english?({ 'সর্বশেষ':'Latest','বাংলাদেশ':'Bangladesh','আন্তর্জাতিক':'World','অর্থনীতি':'Business','খেলাধুলা':'Sports','বিনোদন':'Entertainment','প্রযুক্তি':'Technology','শিক্ষা':'Education','চাকরির খবর':'Jobs','ধর্ম ও জীবনযাপন':'Lifestyle'} as Record<string,string>)[c]:c}</button>)}</div></nav>
  <div className="wrap"><div className="ticker"><strong>ব্রেকিং নিউজ</strong><span>দেশ-বিদেশের সর্বশেষ ও গুরুত্বপূর্ণ সংবাদ পেতে আমাদের সঙ্গে থাকুন</span></div>
   <div className="adslot"><span>বিজ্ঞাপনের স্থান</span><small>Google AdSense / বিজ্ঞাপন কোড যুক্ত করার জায়গা</small></div>
   <section className="sectionhead"><div><span className="eyebrow">NEWS & UPDATES</span><h2>{english?'Latest News':'সর্বশেষ সংবাদ'}</h2></div><input value={search} onChange={e=>setSearch(e.target.value)} placeholder={english?'Search news...':'খবর খুঁজুন...'} aria-label="খবর খুঁজুন"/></section>
   <div className="layout"><section className="stories">{shown.length?shown.map((s,i)=><article className={i===0?'lead story':'story'} key={s.title}><div className="story-image">{i===0?'DESHBIDESH':'NEWS 24'}</div><div className="story-body"><span className="category">{s.category}</span><h3>{s.title}</h3><p>{s.desc}</p><small>{s.time}</small></div></article>):<p className="empty">এই বিভাগে মিলে এমন কোনো নমুনা খবর নেই।</p>}</section>
    <aside><div className="sidebox"><h3>জনপ্রিয় বিভাগ</h3>{categories.slice(1).map(c=><button key={c} onClick={()=>setActive(c)}>{c}<span>›</span></button>)}</div><div className="adslot sidead"><span>বিজ্ঞাপনের স্থান</span><small>সাইডবার বিজ্ঞাপন</small></div></aside></div>
   <div className="adslot bottomad"><span>বিজ্ঞাপনের স্থান</span><small>পৃষ্ঠার নিচের বিজ্ঞাপন</small></div>
  </div>
  <footer><div className="wrap foot"><div><h2>দেশ-বিদেশের সকল খবর</h2><p>DESHBIDESH NEWS 24</p><small>বাংলাদেশ ও বিশ্বের সর্বশেষ সংবাদ</small></div><div><b>আমাদের বিভাগ</b><p>বাংলাদেশ · আন্তর্জাতিক · অর্থনীতি · খেলাধুলা · প্রযুক্তি</p><small>© 2026 DESHBIDESH NEWS 24. সর্বস্বত্ব সংরক্ষিত।</small></div></div></footer>
 </main>
}
