import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import * as data from  '../modals/data.json';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  searchText: string = '';
  modalData: any = data?.projects;
  searchResult: any = null;
  
  searchModal(): any{
    this.searchResult = this.modalData.filter((x: any) => x.name.toLowerCase() ===  this.searchText.toLowerCase())[0];
  }
  
}
