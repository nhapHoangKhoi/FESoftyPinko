// ----- Menu mobi button
const menuMobility = document.querySelector(".header__menu-mobi");

if(menuMobility)
{
   const menuMobilityIcon = menuMobility.querySelector(".header__menu-mobi--button");

   if(menuMobilityIcon)
   {
      menuMobilityIcon.addEventListener("click", () => 
         {
            menuMobilityIcon.classList.toggle("open");
         }
      );
   }
}
// ----- End menu mobi button