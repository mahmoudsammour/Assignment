import { Component, Inject, OnInit, TemplateRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'filter-child',
  template: `
  <input
    type="text"
    class="form-control"
    name="searchString"
    placeholder="Type to search..."
  />
`
})
export class FilterChildComponent implements OnInit {


  constructor(  private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {

  }
}
