import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mapped-skills',
  templateUrl: './mapped-skills.component.html',
  styleUrls: ['./mapped-skills.component.scss']
})
export class MappedSkillsComponent implements OnInit {
  @Input('title') title = 'Mapped Skills';
  @Input('mappedSkills') mappedSkills = [];
  @Output('remove') remove: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }


  /**
   * Represents the ejection of mapped Skill
   * @method removeSelectedSkill
   * @param index => index of selected skill
   */
  removeSelectedSkill(index: number, skillName: string) {
    this.mappedSkills.splice(index, 1);
    this.remove.emit({ skillName: skillName });
  }

}
