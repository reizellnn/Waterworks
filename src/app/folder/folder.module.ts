/** @format */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';

import { HomeComponent } from '../home/home.component';

import { AccountsComponent } from '../accounts/accounts.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, FolderPageRoutingModule],
  declarations: [FolderPage, HomeComponent, AccountsComponent],
})
export class FolderPageModule {}
