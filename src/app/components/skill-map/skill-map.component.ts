import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/data-models/data-models';
import { GlobalDataService } from 'src/app/services/global-data.service';

@Component({
  selector: 'app-skill-map',
  templateUrl: './skill-map.component.html',
  styleUrls: ['./skill-map.component.scss']
})
export class SkillMapComponent implements OnInit {
  standardSkills: Array<string> = [];
  mappedSkills: Array<string> = [];
  skills: Array<Skills> = [];

  currentIndex: number = 0;
  hilight = [];

  constructor(private gds: GlobalDataService) {
    //receives the hardcoded data from GLobal Service
    this.skills = this.gds.data.skills;
    this.standardSkills = this.skills[this.currentIndex].standardSkills;
  }

  ngOnInit() {
  }
  /**
   * Represents the Selected Skill
   * @method selectedSkill
   * @param event => object received from child Component
   */
  selectedSkill(event) {
    this.hilight = [];
    this.currentIndex = event.index;
    this.standardSkills = this.skills[this.currentIndex].standardSkills;
    this.mappedSkills = this.skills[this.currentIndex].mappedSkills;
    this.mappedSkills.map((elm) => {
      let index = this.standardSkills.indexOf(elm);
      if (index !== -1) {
        this.hilight[index] = true;
      }
    });
  }

  /**
   * Represents the Selected Standard Skill
   * @method selectedStandardSkill
   * @param event => object received from child Component
   */
  selectedStandardSkill(event) {
    let skillName = this.skills[this.currentIndex].standardSkills[event.index];
    if (this.skills[this.currentIndex].mappedSkills.indexOf(skillName) === -1) {
      this.skills[this.currentIndex].mappedSkills.push(skillName);
      this.mappedSkills = this.skills[this.currentIndex].mappedSkills;
    }
  }

  /**
   * Represents the ejection of mapped Skill
   * @method removeSkill
   * @param event => object received from child Component
   */
  removeSkill(event){
    let skillName = event.skillName;
    let index = this.skills[this.currentIndex].standardSkills.indexOf(skillName);
    this.hilight[index] = false;
  }

}
