<script>
export default {
  data() {
    return {
      display: true,
      vie: false
    }
  },
  methods: {
    magic() {
      this.display = !this.display
      const deuxDeux = document.querySelector('.deux-deux')
      deuxDeux.style.width = this.display ? '80%' : '99%'
    },
    activetools() {
      this.vie = !this.vie
    }
  }
}
</script>

<template>
  <section class="un">
    <div class="section-un">
      <button id="menu" @click="magic()">
        <svg focusable="false" viewBox="0 0 24 24" class="svg-logo">
          <path fill="rgba(0,0,0,0.7)" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
        </svg>
      </button>

      <img
        class="pfotos"
        src="https://www.gstatic.com/images/branding/product/1x/contacts_2022_48dp.png"
        srcset="
          https://www.gstatic.com/images/branding/product/1x/contacts_2022_48dp.png 1x,
          https://www.gstatic.com/images/branding/product/2x/contacts_2022_48dp.png 2x
        "
        alt
        aria-hidden="true"
        role="presentation"
        style="width: 40px; height: 40px"
        data-iml="1069.0999999940395"
        data-atf="true"
      />
      <h2 class="premiere-lettre">contact</h2>
    </div>
    <div class="section-deux">
      <div class="section-deux-logo">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
            class="svg-logo-deux"
          >
            <path
              fill="rgba(0,0,0,0.7)"
              d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"
            />
          </svg>
        </button>
      </div>
      <div class="section-deux-input">
        <input type="text" placeholder="recherche" class="recherche" />
      </div>
    </div>
    <div class="icon">
      <button class="help">
        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24">
          <path
            fill="rgba(0,0,0,0.7)"
            d="M11 18h2v-2h-2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5c0-2.21-1.79-4-4-4"
          />
        </svg>
      </button>
      <button class="settings">
        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24">
          <path
            fill="rgba(0,0,0,0.7)"
            d="M19.14 12.94c.04-.3.06-.61.06-.94c0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6s3.6 1.62 3.6 3.6s-1.62 3.6-3.6 3.6"
          />
        </svg>
      </button>
      <button class="apps">
        <span class="material-symbols-outlined" style="background-color: 'rgba(0,0,0,0.7)'"
          >apps</span
        >
      </button>
    </div>
  </section>
  <!--- le debut de mon aside--->
  <section class="deux" style="display: flex">
    <div id="aside" class="deux-un" style="" :class="{ 'd-flex': display, 'd-none': !display }">
      <button id="addcontact" class="creer-un-contact" @click="activetools">
        <div class="plus">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="30" viewBox="-6 -3 24 24">
            <path fill="rgba(0,0,0,0.7)" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z" />
          </svg>
        </div>
        <div class="tools-un" v-if="vie">
          <!--- c'est pour creer une personne--->

          <router-link to="/addpersonne" style="text-decoration: none">
            <button class="une-persone" style="display: flex; gap: 15px; margin-left: 0px">
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="40" viewBox="-7 -7 30 34">
                <path
                  fill="rgba(0,0,0,0.7)"
                  d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4"
                />
              </svg>
              <p style="margin-top: 17px">creer un contact</p>
            </button>
          </router-link>

          <!--- c'est pour creer plusieur personne--->

          <button class="une-persone" style="display: flex; gap: 15px; margin-left: 0px">
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="40" viewBox="-7 -7 30 34">
              <path
                fill="rgba(0,0,0,0.7)"
                d="M13.07 10.41a5 5 0 0 0 0-5.82A3.4 3.4 0 0 1 15 4a3.5 3.5 0 0 1 0 7a3.4 3.4 0 0 1-1.93-.59M5.5 7.5A3.5 3.5 0 1 1 9 11a3.5 3.5 0 0 1-3.5-3.5m2 0A1.5 1.5 0 1 0 9 6a1.5 1.5 0 0 0-1.5 1.5M16 17v2H2v-2s0-4 7-4s7 4 7 4m-2 0c-.14-.78-1.33-2-5-2s-4.93 1.31-5 2m11.95-4A5.32 5.32 0 0 1 18 17v2h4v-2s0-3.63-6.06-4Z"
              />
            </svg>
            <p style="margin-top: 17px">creer plusieur contacts</p>
          </button>
        </div>
        <span class="text-contact" style="text-decoration: none">Creer un contact</span>
      </button>

      <router-link style="text-decoration: none" to="/">
        <button class="contact">
          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="40" viewBox="-7 -7 30 34">
            <path
              fill="rgba(0,0,0,0.7)"
              d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4"
            />
          </svg>
          <p style="margin-top: 15px">Contacts</p>
        </button>
      </router-link>

      <!--- activation de ma frequence--->

      <router-link to="/frequence" style="text-decoration: none">
        <button class="history">
          <svg xmlns="http://www.w3.org/2000/svg" width="29" height="40" viewBox="-7 -7 30 34">
            <path
              fill="rgba(0,0,0,0.7)"
              d="M13 3a9 9 0 0 0-9 9H1l3.89 3.89l.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7s-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0 0 13 21a9 9 0 0 0 0-18m-1 5v5l4.28 2.54l.72-1.21l-3.5-2.08V8z"
            />
          </svg>
          <p style="margin-top: 15px">Frequence</p>
        </button>
      </router-link>

      <!--- activation d'une autre contact--->

      <router-link to="/autrecontact" style="text-decoration: none">
        <button class="autre-contact">
          <svg xmlns="http://www.w3.org/2000/svg" width="29" height="40" viewBox="-7 -7 30 34">
            <path
              fill="rgba(0,0,0,0.7)"
              d="m20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27M12 17.5L6.5 12H10v-2h4v2h3.5zM5.12 5l.81-1h12l.94 1z"
            />
          </svg>
          <p style="margin-top: 15px">Autre contacts</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="40"
            viewBox="-30 -13
         30 43"
          >
            <path
              fill="rgba(0,0,0,0.7)"
              d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8"
            />
          </svg>
        </button>
      </router-link>
      <h4>Corriger et gerer</h4>
      <!--- activation pour la fusion--->

      <button class="cokoo">
        <div class="handyman">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="40px"
            viewBox="-100 -980 1000 1000"
            width="24px"
            fill="rgba(0,0,0,0.7)"
          >
            <path
              d="M754-81q-8 0-15-2.5T726-92L522-296q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l85-85q6-6 13-8.5t15-2.5q8 0 15 2.5t13 8.5l204 204q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13l-85 85q-6 6-13 8.5T754-81Zm0-95 29-29-147-147-29 29 147 147ZM205-80q-8 0-15.5-3T176-92l-84-84q-6-6-9-13.5T80-205q0-8 3-15t9-13l212-212h85l34-34-165-165h-57L80-765l113-113 121 121v57l165 165 116-116-43-43 56-56H495l-28-28 142-142 28 28v113l56-56 142 142q17 17 26 38.5t9 45.5q0 24-9 46t-26 39l-85-85-56 56-42-42-207 207v84L233-92q-6 6-13 9t-15 3Zm0-96 170-170v-29h-29L176-205l29 29Zm0 0-29-29 15 14 14 15Zm549 0 29-29-29 29Z"
            />
          </svg>
        </div>
        <p class="text-contact">Fusionner et Coriger</p>
      </button>

      <button class="cokoo">
        <svg xmlns="http://www.w3.org/2000/svg" width="29" height="40" viewBox="-7 -7 30 34">
          <path
            fill="rgba(0,0,0,0.7)"
            d="M13 3v9.586l3.5-3.5l1.414 1.414L12 16.414L6.086 10.5L7.5 9.086l3.5 3.5V3zM4.5 14v5h15v-5h2v7h-19v-7z"
          />
        </svg>
        <p class="text-contact">importer</p>
      </button>

      <button class="cokoo">
        <svg xmlns="http://www.w3.org/2000/svg" width="29" height="40" viewBox="-7 -7 30 34">
          <path
            fill="rgba(0,0,0,0.7"
            d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zM9 17h2V8H9zm4 0h2V8h-2zM7 6v13z"
          />
        </svg>
        <p class="text-contact">corbeille</p>
      </button>
      <div class="lafino">
        <h4>Libelles</h4>
        <button class="lafino-un">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="30" viewBox="1 4 24 24">
            <path fill="rgba(0,0,0,0.7)" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z" />
          </svg>
        </button>
      </div>
    </div>

    <!-- mix sur le tableau --->
    <div class="deux-deux" :class="{ 'd-miniwidth': display, 'd-maxwidth': !display }">
      <div class="ens">
      <div class="pics">
        <svg xmlns="http://www.w3.org/2000/svg" width="1000" height="500" viewBox="0 0 1280 1280" fill="none">
<rect width="100%" height="80%" fill="none"/>
<g clip-path="url(#clip0_1314_5310)">
<path d="M474.112 361.8L495.252 343.01C499.652 338.89 503.112 342.37 499.142 347.67C495.162 352.97 474.502 383.29 474.502 383.29L474.112 361.8Z" fill="#0B57D0" stroke="#0B57D0" stroke-width="4.11454" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M782.492 560.59L814.042 535.6C818.672 531.51 821.672 534.88 819.492 539.19C817.312 543.5 795.062 569.38 795.062 569.38L782.492 560.59Z" fill="white" stroke="#0B57D0" stroke-width="4.11454" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M834.023 579.28L880.063 546.77C883.743 544.32 881.423 540.37 876.933 542.55C872.443 544.73 835.383 565.3 835.383 565.3L834.023 579.28Z" fill="white" stroke="#0B57D0" stroke-width="4.11454" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M834.018 579.28L872.518 540.41C875.788 536.96 872.478 532.6 865.748 538.41C859.028 544.22 828.198 569.83 828.198 569.83L834.018 579.28Z" fill="white" stroke="#0B57D0" stroke-width="4.11454" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M321.719 1004.5C240.889 1004.5 175.949 955.47 187.879 902.46C199.809 849.45 250.159 816.33 332.319 801.75C414.479 787.17 640.419 767.3 640.419 767.3C640.419 767.3 876.959 528.28 963.089 527.38C1079.26 526.18 1021.4 735.49 904.779 914.39H759.019L672.269 940.51L663.459 1004.5H321.719Z" fill="white" stroke="#0B57D0" stroke-width="4.11454" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M540.947 776.67C540.947 776.67 497.957 729.31 501.487 684.25L429.877 718.61L456.437 580C456.437 580 563.757 589.71 587.507 555.48C601.987 534.61 601.597 513.42 602.127 513.42C602.657 513.42 639.757 513.42 639.757 513.42C639.757 513.42 639.317 562.38 690.547 572.59C755.697 585.58 778.007 605.61 790.377 672.75L798.767 717.81H691.137L640.417 767.28L540.947 776.67Z" fill="white" stroke="#0B57D0" stroke-width="4.11454" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M741.04 731.319C772.923 731.319 798.77 725.651 798.77 718.66C798.77 711.668 772.923 706 741.04 706C709.157 706 683.31 711.668 683.31 718.66C683.31 725.651 709.157 731.319 741.04 731.319Z" fill="#0B57D0" stroke="#0B57D0" stroke-width="4.11454" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M683.308 718.66L671.998 659.81" stroke="#0B57D0" stroke-width="4.11454" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M581.617 444.45C581.617 444.45 562.527 430.75 562.527 444.45C562.527 458.15 577.907 475.51 577.907 475.51L581.617 444.45Z" fill="white" stroke="#0B57D0" stroke-width="4.11454" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M659.511 444.45C659.511 444.45 678.601 430.75 678.601 444.45C678.601 458.15 663.221 475.51 663.221 475.51L659.511 444.45Z" fill="white" stroke="#0B57D0" stroke-width="4.11454" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M168.001 1004.5H1112.83" stroke="#0B57D0" stroke-width="4.11454" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M324.219 855.05L689.959 898.64" stroke="#0B57D0" stroke-width="4.11454" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M689.961 898.64C676.411 898.64 672.881 933.09 663.461 1004.5H707.041C707.041 1004.5 709.381 898.64 689.961 898.64Z" fill="#0B57D0" stroke="#0B57D0" stroke-width="4.11454" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M761.073 914.39C761.073 914.39 746.353 957.83 741.053 1004.5H958.373C961.903 971.08 829.983 969.31 838.813 914.39H761.073Z" fill="white" stroke="#0B57D0" stroke-width="4.11454" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M759.018 914.39L888.438 666.59" stroke="#0B57D0" stroke-width="4.11454" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M663.461 1004.5H733.551C779.491 1004.5 843.101 1045.87 873.131 1039.4L746.501 898.64C746.501 898.64 702.251 922.81 673.431 933.69C673.431 933.69 667.101 976.78 663.461 1004.5Z" fill="white" stroke="#0B57D0" stroke-width="4.11454" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M501.5 684.26C505.48 658.64 519.609 626.84 519.609 626.84L501.5 684.26Z" fill="white"/>
<path d="M501.5 684.26C505.48 658.64 519.609 626.84 519.609 626.84" stroke="#0B57D0" stroke-width="4.11454" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M429.881 718.62C412.851 725.78 418.451 673.07 442.011 580.01H464.971C464.971 580.01 462.921 706.34 429.881 718.62Z" fill="#0B57D0" stroke="#0B57D0" stroke-width="4.11454" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M543.752 576.81C543.752 576.81 569.522 618.88 621.202 618.88C665.112 618.88 694.872 573.5 694.872 573.5" stroke="#0B57D0" stroke-width="4.11454" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M669.849 445.88C669.849 405.33 636.599 397.12 620.559 396.98V396.97C620.489 396.97 620.419 396.97 620.349 396.97C620.279 396.97 620.199 396.97 620.139 396.97V396.98C604.099 397.12 570.849 405.33 570.849 445.88C570.849 486.58 591.689 519.34 620.139 519.67V519.69C620.209 519.69 620.279 519.68 620.349 519.68C620.419 519.68 620.489 519.69 620.559 519.69V519.67C649.009 519.34 669.849 486.58 669.849 445.88Z" fill="white" stroke="#0B57D0" stroke-width="4.11454" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M623.852 306.47H474.112V456.22V605.96H623.852L771.632 604L773.592 456.22V306.47H623.852Z" stroke="#0B57D0" stroke-width="4.11454" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M449.723 690.56C449.723 690.56 378.703 690 388.413 635.22C398.123 580.44 462.623 430.71 462.623 430.71C462.623 430.71 454.233 383 474.103 361.8V375.49L531.083 367.98C539.033 366.88 537.713 373.06 531.083 375.05C524.453 377.04 486.023 387.2 486.023 387.2L536.553 387.42C543.003 387.86 541.363 394.71 536.553 394.71L489.993 395.81L534.603 404.2C539.463 405.53 537.033 411.27 532.173 410.6C527.313 409.94 492.193 406.85 492.193 406.85L528.003 418.34C532.423 420.11 531.983 424.3 526.903 423.64C521.823 422.98 489.803 416.79 489.803 416.79C489.803 416.79 485.813 520.93 474.123 579.94C474.113 579.95 461.313 668.49 449.723 690.56Z" fill="white" stroke="#0B57D0" stroke-width="4.11454" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M685.249 306.47C668.729 242.07 576.799 243.14 559.999 306.47H623.849H685.249Z" stroke="#0B57D0" stroke-width="4.11454" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M687.807 327.66C687.807 319.94 686.897 312.89 685.247 306.48H623.847H559.997C558.297 312.91 557.347 319.96 557.347 327.66C557.347 414.63 687.807 414.26 687.807 327.66Z" fill="#0B57D0" stroke="#0B57D0" stroke-width="4.11454" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M668.672 462.39C676.012 420.62 652.132 397.22 621.062 396.98V396.97C620.992 396.97 620.922 396.98 620.852 396.98C620.782 396.98 620.712 396.97 620.642 396.97V396.98C580.802 396.98 567.662 424.38 572.532 462.39C572.532 462.39 617.382 450.91 620.852 427.21C620.852 456.04 668.672 462.39 668.672 462.39Z" fill="#0B57D0" stroke="#0B57D0" stroke-width="4.11454" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M773.589 265.06V240" stroke="#0B57D0" stroke-width="4.11454" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M814.409 306.47H839.469" stroke="#0B57D0" stroke-width="4.11454" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M808.536 271.89L826.266 254.17" stroke="#0B57D0" stroke-width="4.11454" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M795.883 605.96L794.793 770.17C794.793 807.77 773.593 820.12 747.933 812.49C710.523 800.5 704.763 708.82 704.763 708.82C712.833 707.08 735.613 706.01 735.613 706.01C745.203 666.6 772.043 573.51 772.043 573.51C775.903 563.67 784.443 556.4 798.773 556.4C813.863 556.4 821.123 565.89 828.573 565.89L854.003 538.23C859.813 531.33 864.533 534.06 861.183 539.65C857.923 545.09 834.023 579.28 834.023 579.28H796.973L795.883 605.96Z" fill="white" stroke="#0B57D0" stroke-width="4.11454" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M735.61 706C735.61 706 728.04 730.089 724.5 746.459L735.61 706Z" fill="white"/>
<path d="M735.61 706C735.61 706 728.04 730.089 724.5 746.459" stroke="#0B57D0" stroke-width="4.11454" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_1314_5310">
<rect width="948.83" height="804.08" fill="white" transform="translate(166 238)"/>
</clipPath>
</defs>
</svg>
      </div>
        <h3 class="top">Rien a signaler. Aucune nouvelle suggestion</h3>
      </div>
    </div>
  </section>
</template>
<style>
.material-symbols-outlined {
  font-variation-settings:
    'FILL' rgba(0, 0, 0, 0.7),
    'wght' 400,
    'GRAD' 0,
    'opsz' 24;
}
.un {
  display: flex;
  gap: 10%;
}
.section-deux-logo {
  background-color: #f1f3f4;
  height: 56px;
  width: 36px;
  border-radius: 5px 0px 0px 0px;
}
button {
  height: 56px;
  width: 100%;
  border: 0px;
  background-color: transparent;
  border-radius: 5px 0px 0px 5px;
}
.svg-logo-deux {
  position: relative;
  top: 4px;
  color: rgb(108, 106, 106);
}
.section-deux {
  display: flex;
}
.recherche {
  width: 60vh;
  border: 0px;
  padding: 20px;
  background-color: #f1f3f4;
  border-radius: 0px 5px 0px 0px;
}
.svg-logo {
  padding: 9px;
  width: 5vh;
  height: 24px;
}
.section-un {
  display: flex;
  margin-left: 0px;
  align-items: center;
  gap: 6px;
}
.premiere-lettre {
  height: 41px;
  margin-bottom: 7px;
}

.d-flex {
  display: block;
}
.d-none {
  display: none;
}
.deux-deux {

  width: 98vh;
  border-radius: 30px;
  height: 83vh;
  margin-left: 13px;
  right: 0.5%;
  position: absolute;
  transition: width 0.5s ease;
}
.creer-un-contact {
  padding: 7px;
  width: 70%;
  height: 8%;
  background-color: rgb(194, 231, 255);
  margin-left: 10px;
  border-radius: 20px;
  text-align: center;
  display: flex;
  gap: 8px;
}
p {
  margin-top: 10px;
}
.creer-un-contact:hover {
  background-color: rgb(167, 200, 222);
  box-shadow: 0px 10px 8px 0px rgba(165, 165, 165, 0.5);

  transition: opacity 0.2s ease;
}
.contact {
  display: flex;
  margin-top: 10px;
  gap: 10px;
  height: 47px;
  margin-left: 10px;
}
.cokoo {
  display: flex;
  gap: 10px;
  height: 47px;
  margin-left: 10px;
}
.contact:hover {
  background-color: rgb(220, 230, 236);
  border-radius: 41px;
}
.cokoo:hover {
  background-color: rgb(220, 230, 236);
  border-radius: 41px;
}
.text-contact {
  margin-top: 12px;
}
.history {
  display: flex;
  gap: 10px;
  background-color: rgb(194, 231, 255);
  border-radius: 41px;
  height: 47px;
  margin-left: 10px;
}
.autre-contact {
  display: flex;
  gap: 10px;
  height: 47px;
  margin-left: 10px;
}
.autre-contact:hover {
  background-color: rgb(220, 230, 236);
  border-radius: 41px;
}
.text-frequence {
  margin-top: 10px;
}
.deux {
  gap: 8px;
  border-radius: 10px;
}
.d-maxwidth {
  width: 98%;
}

.d-miniwidth {
  width: 81%;
}
table {
  width: 100%;
  overflow: scroll;
}
.deux-un {
  width: 17.5%;
  height: 90vh;
  background-color: #f8fafd;
  font-family: 'Product Sans', Arial, sans-serif;
  font-size: 14px;
  line-height: 8px;
}
.ens {
  margin: 25px;
}
th {
  border-bottom: 1px solid black;
}

.icon {
  display: flex;
  margin-left: 25vh;
  gap: 10px;
}
.help {
  padding: 15px;
  border-radius: 30px;
}
.settings {
  padding: 15px;
  border-radius: 30px;
}
.apps {
  margin-left: 20px;
  padding: 15px;
  border-radius: 30px;
}
h4 {
  margin-left: 17px;
}
.handyman {
  margin-left: 5px;
}
.lafino {
  display: flex;
  gap: 18vh;
}
.lafino-un {
  width: 30px;
  height: 30px;
  padding: 4px;
  margin-top: 4px;
}
.lafino-un:hover {
  background-color: #bcbcbc;
  border-radius: 80px;
}
.top{
  margin-top: 0%;
  margin-left: 40vh;
}
.pics{
  width: 100%;
  height: 51vh;
}
</style>
