// ----- Menu mobi button
const menuMobility = document.querySelector(".header__menu-mobi");

if(menuMobility)
{
   const menuMobilityIcon = menuMobility.querySelector(".header__menu-mobi--button");
   const collapseElement = document.querySelector("#pinko-menu");

   if(menuMobilityIcon)
   {
      menuMobilityIcon.addEventListener("click", () => 
         {
            // Check if the menu is currently being toggled
            const isCollapsing = collapseElement.classList.contains("collapsing");

            if(!isCollapsing) {
               // toggle the collapse state only if not animating
               if (collapseElement.classList.contains("show")) {
                  $(collapseElement).collapse('hide');
               } 
               else {
                  $(collapseElement).collapse('show');
               }
            }
         }
      );

      // event listeners for Bootstrap collapse events
      $(collapseElement).on('show.bs.collapse', () => {
         menuMobilityIcon.classList.add("open");
      });

      $(collapseElement).on('hide.bs.collapse', () => {
         menuMobilityIcon.classList.remove("open");
      });
   }
}
// ----- End menu mobi button