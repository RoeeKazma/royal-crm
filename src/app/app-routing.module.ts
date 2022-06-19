import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './components/contacts/contacts.component';
import { CustomersComponent } from './components/customers/customers.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HttpTutComponent } from './components/http-tut/http-tut.component';
import { CustomersNewComponent } from './components/customers-new/customers-new.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'customers',
    pathMatch: 'full',
  },
  {
    path: 'customers',
    component: CustomersComponent,
  },
  {
    path: 'customers/new',
    component: CustomersNewComponent,
  },
  {
    path: 'contacts',
    component: ContactsComponent,
  },
  {
    path: 'http-tut',
    component: HttpTutComponent,
  },
  {
    path: 'page-not-found',
    component: PageNotFoundComponent,
  },
  {
    path: '**',
    redirectTo: 'page-not-found',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
