import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-standard-skills',
  templateUrl: './standard-skills.component.html',
  styleUrls: ['./standard-skills.component.scss']
})
export class StandardSkillsComponent implements OnInit {
  @Input('title') title = 'Standard Skills';
  @Input('standardSkills') standardSkills = [];
  @Input('hilight') hilight = [];
  @Output('selected') selected: EventEmitter<any> = new EventEmitter(); 

  constructor() { }

  ngOnChanges() {
    this.standardSkills.map((elm) => {
      this.hilight.push(false)
    });
  }

  ngOnInit() {
  }

  /**
   * Represented the adding of mapped Skill
   * @method addToMappedSkills
   * @param index => index of selected Skill
   */

  addToMappedSkills(index: number) {
    this.hilight[index] = true;
    this.selected.emit({ index: index });
  }
}
