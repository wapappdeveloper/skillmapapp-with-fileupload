import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  @Input('title') title = 'Skills';
  @Input('skills') skills = [];
  @Output('selected') selected: EventEmitter<any> = new EventEmitter();
  hilight = [true];

  constructor() { }

  ngOnChanges() {
    this.hilight = [true];
    this.skills.map((elm) => {
      this.hilight.push(false)
    })
  }

  ngOnInit() {
  }

  /**
   * Represented the selection of skill
   * @method selectSkill
   * @param index => index of selected Skill
   */
  selectSkill(index) {
    this.hilight = this.hilight.map(() => {
      return false
    });
    this.hilight[index] = true;
    this.selected.emit({ index: index });
  }

}
