import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalDataService {
  data = {
    skills: [
      {
        description: 'Develop annual business plans for the Ethics and Compilance function to ensure the achievement of final and strategic objectives.',
        standardSkills: [
          'implement operational business plans',
          'analyse business objectives',
          'maintain operational standards',
          'information security strategy',
          'analyse business plans',
          'advice on leagal compliance for participation in financial markets',
          'report on environmental issues',
          'manage human resources',
          'develop staff',
        ], mappedSkills: []
      },
      {
        description: 'Functionally report to the Chief Legel Officer on the progress of activities against the annual business plans, opportunities identified, challenges and issues faced, mitigations taken, etc. as required, to inform decision-making',
        standardSkills: [
          'implement operational business plans',
          'analyse business objectives',
          'information security strategy',
          'maintain operational standards',
          'advice on leagal compliance for participation in financial markets',
          'report on environmental issues',
          'manage a team',
          'adapt to changes in technological development plans',
          'manage human resources',
          'develop staff',
          'analyse business plans'
        ], mappedSkills: []
      },
      {
        description: 'Oversee the Ethics and Compliance function\'s performance by managing performance of direct and indirect reports, defining workforce requirements, recruiting, training and developing talent, in conjunction with the Human Capital function, to ensure competent, qualified and highly motivated staff enable the achievement of the function\'s objectives',
        standardSkills: [
          'implement operational business plans',
          'analyse business objectives',
          'information security strategy',
          'maintain operational standards',
          'advice on leagal compliance for participation in financial markets',
          'report on environmental issues',
          'manage a team',
          'adapt to changes in technological development plans',
          'analyse business plans'
        ], mappedSkills: []
      },
      {
        description: 'Review employee engagement results and develop action plans to establish a motivated and engaged workforce.',
        standardSkills: [
          'implement operational business plans',
          'analyse business objectives',
          'information security strategy',
          'advice on leagal compliance for participation in financial markets',
          'report on environmental issues',
          'manage a team',
          'adapt to changes in technological development plans',
          'manage human resources',
          'develop staff',
          'maintain operational standards',
          'analyse business plans'
        ], mappedSkills: []
      },
      {
        description: 'Prepare and recommend the Ethics and Compliance function budget in alignment to the respective annual business plan.',
        standardSkills: [
          'implement operational business plans',
          'analyse business objectives',
          'information security strategy',
          'maintain operational standards',
          'manage a team',
          'adapt to changes in technological development plans',
          'manage human resources',
          'develop staff',
          'analyse business plans'
        ], mappedSkills: []
      }
    ],
    standardSkills: [
      'implement operational business plans',
      'analyse business objectives',
      'information security strategy',
      'advice on leagal compliance for participation in financial markets',
      'report on environmental issues',
      'manage a team',
      'adapt to changes in technological development plans',
      'manage human resources',
      'develop staff',
      'maintain operational standards',
      'analyse business plans'
    ]
  }
  constructor() { }
}
