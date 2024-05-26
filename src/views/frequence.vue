<script>
export default {
  data() {
    return {
      display: true,
      vie:false
    }
  },
  methods: {
    magic() {
      this.display = !this.display
      const deuxDeux = document.querySelector('.deux-deux')
      deuxDeux.style.width = this.display ? '80%' : '99%'
    },
    activetools(){
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
          
          <router-link to="/addpersonne" style="text-decoration:none;">
                <button class="une-persone" style="display:flex; gap:15px;margin-left:0px">
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="40" viewBox="-7 -7 30 34">
          <path
            fill="rgba(0,0,0,0.7)"
            d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4"
          />
        </svg>
        <p style="margin-top:17px;">creer un contact</p>
          </button>
          </router-link>
        

            <!--- c'est pour creer plusieur personne--->

           <button  class="une-persone" style="display:flex; gap:15px;margin-left:0px">
           <svg xmlns="http://www.w3.org/2000/svg" width="35" height="40" viewBox="-7 -7 30 34">
           <path fill="rgba(0,0,0,0.7)" d="M13.07 10.41a5 5 0 0 0 0-5.82A3.4 3.4 0 0 1 15 4a3.5 3.5 0 0 1 0 7a3.4 3.4 0 0 1-1.93-.59M5.5 7.5A3.5 3.5 0 1 1 9 11a3.5 3.5 0 0 1-3.5-3.5m2 0A1.5 1.5 0 1 0 9 6a1.5 1.5 0 0 0-1.5 1.5M16 17v2H2v-2s0-4 7-4s7 4 7 4m-2 0c-.14-.78-1.33-2-5-2s-4.93 1.31-5 2m11.95-4A5.32 5.32 0 0 1 18 17v2h4v-2s0-3.63-6.06-4Z"/></svg>
        <p style="margin-top:17px;">creer plusieur contacts</p>
          </button>

        </div>
        <span class="text-contact" style="text-decoration: none">Creer un contact</span>
      </button>

   <router-link style="text-decoration:none;" to="/">
<button class="contact">
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="40" viewBox="-7 -7 30 34">
          <path
            fill="rgba(0,0,0,0.7)"
            d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4"
          />
        </svg>
        <p style="margin-top:15px;">Contacts</p>
      </button>

      </router-link>

      <!--- activation de ma frequence--->

         <button class="history">
        <svg xmlns="http://www.w3.org/2000/svg" width="29" height="40" viewBox="-7 -7 30 34">
          <path
            fill="rgba(0,0,0,0.7)"
            d="M13 3a9 9 0 0 0-9 9H1l3.89 3.89l.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7s-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0 0 13 21a9 9 0 0 0 0-18m-1 5v5l4.28 2.54l.72-1.21l-3.5-2.08V8z"
          />
        </svg>
        <p style="margin-top:15px;">Frequence</p>
      </button>
      <!--- activation d'une autre --->

      <router-link to="/autrecontact" style="text-decoration:none;">
        <button class="autre-contact">
        <svg xmlns="http://www.w3.org/2000/svg" width="29" height="40" viewBox="-7 -7 30 34">
          <path
            fill="rgba(0,0,0,0.7)"
            d="m20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27M12 17.5L6.5 12H10v-2h4v2h3.5zM5.12 5l.81-1h12l.94 1z"
          />
        </svg>
        <p style="margin-top:15px;">Autre contacts</p>
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

      <!--- active le fusion --->
      <router-link to="/fusion" style="text-decoration:none;">
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
      </router-link>
      

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
        <h1 id="contact">contacts frequents</h1>
        <table id="addtablecontact">
          <thead>
            <tr>
              <th style="width: 40vh; text-align: left">Titre</th>
              <th>E-mail</th>
              <th>Numéro de téléphone</th>
              <th>Fonction et entreprise</th>
              <th :class="{ 'd-flex': !display, 'd-none': display }">Libellés</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td :class="{ 'd-flex': !display, 'd-none': display }"></td>
            </tr>
          </tbody>
        </table>
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
  background-color: white;
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

</style>
