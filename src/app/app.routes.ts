import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ServiceComponent } from './service/service.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { OrderComponent } from './order/order.component';

export const routes: Routes = [
  { path: '', redirectTo: '/Home',
    pathMatch: 'full'
},
{
   path:'Home',
   component:HomeComponent

},
{
   path:'menu',
   component:MenuComponent
},
{
   path:'service',
   component:ServiceComponent
},
{
   path:'about',
   component:AboutComponent
},
{
   path:'contact',
   component:ContactComponent
},
{
   path:'order',
   component:OrderComponent
}
];
