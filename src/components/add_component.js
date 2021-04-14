import React, { useState } from 'react';

import { getCurrentUser } from '../helper';

export default function AddsComponents() {
  const [currentUser] = useState(getCurrentUser());
  return (
    <>
      <div className="ads-wrapper mt-3">
        <iframe
          frameBorder="0"
          height="100"
          id="aswift_0"
          marginHeight="0"
          marginWidth="0"
          name="aswift_0"
          scrolling="no"
          src='https://googleads.g.doubleclick.net/pagead/ads?client=ca-pub-2280007608584385&amp;format=320x100&amp;output=html&amp;h=100&amp;slotname=8619412948&amp;adk=3820663941&amp;adf=2444517951&amp;w=320&amp;lmt=1480764428&amp;flash=23.0.0&amp;url=http%3A%2F%2Fafghanfashion.com%2Fen%2F&amp;wgl=1&amp;dt=1480764431906&amp;bpp=32&amp;bdt=2353&amp;fdt=107&amp;idt=1645&amp;shv=r20161128&amp;cbv=r20161117&amp;saldr=aa&amp;correlator=2085870981537&amp;frm=20&amp;ga_vid=748426410.1477631041&amp;ga_sid=1480764434&amp;ga_hid=2124941115&amp;ga_fc=0&amp;pv=2&amp;iag=3&amp;icsg=2&amp;nhd=1&amp;dssz=2&amp;mdo=0&amp;mso=0&amp;u_tz=330&amp;u_his=2&amp;u_java=0&amp;u_h=768&amp;u_w=1366&amp;u_ah=728&amp;u_aw=1366&amp;u_cd=24&amp;u_nplug=5&amp;u_nmime=7&amp;dff=arial&amp;dfs=13&amp;adx=202&amp;ady=2719&amp;biw=1349&amp;bih=431&amp;eid=33509839%2C575144605&amp;oid=3&amp;rx=0&amp;eae=0&amp;fc=16&amp;pc=1&amp;brdim=0%2C0%2C0%2C0%2C1366%2C0%2C1366%2C728%2C1366%2C431&amp;vis=1&amp;rsz=%7C%7CleEr%7C&amp;abl=CS&amp;ppjl=t&amp;pfx=0&amp;fu=16&amp;bc=1&amp;ifi=1&amp;xpc=pHL5cE1BG4&amp;p=http%3A//afghanfashion.com&amp;dtd=2076"'
          width="100%"></iframe>
      </div>
    </>
  );
}
