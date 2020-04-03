import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export interface Projects {
  projectId: string;
  program: string;
  projectTitle: string;
  applicant: string;
  fundingYear: string;
  municipality: string
  status: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

const SAMPLE_PROJECT_DATA: Projects[] = [
  {projectId:"OS-1782",program:"Open Space",projectTitle:"AMCHU Property",applicant:"Denville Township",fundingYear:"20 Sep 2019",municipality:"Denville Twp.",status:"Pending"},
  {projectId:"FA-185",program:"Farmland",projectTitle:"Angen, LLC",applicant:"Angen, LLC",fundingYear:" 20 Sep 2014",municipality:"Mount Olive Twp.",status:"Preserved"},
  {projectId:"FA-153",program:"Farmland",projectTitle:"Aresty Farm",applicant:"Aresty Farm",fundingYear:" 20 Sep 2014",municipality:"Chester Twp.",status:"Preserved"},
  {projectId:"OS-1781",program:"Open Space",projectTitle:"Black River Fields",applicant:"Chester Township",fundingYear:"20 Sep 2019",municipality:"Chester Twp.",status:"Pending"},
  {projectId:"FL-13",program:"Flood Mitigation",projectTitle:"Boonton - Harrison Street",applicant:"Boonton",fundingYear:"NA",municipality:"Boonton",status:"Closed"},
  {projectId:"OS-1759",program:"Open Space",projectTitle:"Columbia Trail",applicant:"MC Park Commission",fundingYear:"20 Sep 2018",municipality:"Washington Twp.",status:"Preserved"},
  {projectId:"FL-3",program:"Flood Mitigation",projectTitle:"Denville - 4021",applicant:"Denville Twp",fundingYear:"NA",municipality:"Denville Twp",status:"Closed"},
  {projectId:"FL-8",program:"Flood Mitigation",projectTitle:"Denville - Riverside Drive",applicant:"Denville Twp",fundingYear:"NA",municipality:"Denville Twp",status:"Closed"},
  {projectId:"FA-282",program:"Farmland",projectTitle:"Dietz, Karen",applicant:"Dietz Farm",fundingYear:"18 Sep 2019",municipality:"Chester Twp.",status:"Pending"},
  {projectId:"FA-172",program:"Farmland",projectTitle:"How, Burton & Mary P",applicant:"How Farm",fundingYear:"20 Sep 2014",municipality:"Mendham Twp.",status:"Preserved"},
  {projectId:"OS-1774",program:"Open Space",projectTitle:"Jonathan's Woods",applicant:"MC Park Commission",fundingYear:" 20 Sep 2019",municipality:"Denville Twp.",status:"Pending"},
  {projectId:"FA-152",program:"Farmland",projectTitle:"Konkus Farm, LLC",applicant:"Konkus Farm, LLC",fundingYear:" 20 Sep 2014",municipality:"Chester Twp.",status:"Preserved"},
  {projectId:"FL-6",program:"Flood Mitigation",projectTitle:"Lincoln Park - 4021",applicant:"Lincoln Park Boro",fundingYear:"NA",municipality:"Lincoln Park Boro",status:"Closed"},
  {projectId:"FL-22",program:"Flood Mitigation",projectTitle:"Lincoln Park - Central",applicant:"Lincoln Park Boro",fundingYear:"NA",municipality:"Lincoln Park Boro",status:"Closed"},
  {projectId:"FL-34",program:"Flood Mitigation",projectTitle:"Lincoln Park - Central-3",applicant:"Lincoln Park Boro",fundingYear:"NA",municipality:"Lincoln Park Boro",status:"Active"},
  {projectId:"FL-39",program:"Flood Mitigation",projectTitle:"Lincoln Park - Central-4",applicant:"Lincoln Park Boro",fundingYear:"NA",municipality:"Lincoln Park Boro",status:"Active"},
  {projectId:"FL-25",program:"Flood Mitigation",projectTitle:"Lincoln Park - North",applicant:"Lincoln Park Boro",fundingYear:"NA",municipality:"Lincoln Park Boro",status:"Closed"},
  {projectId:"FL-26",program:"Flood Mitigation",projectTitle:"Lincoln Park - South",applicant:"Lincoln Park Boro",fundingYear:"NA",municipality:"Lincoln Park Boro",status:"Closed"},
  {projectId:"FL-35",program:"Flood Mitigation",projectTitle:"Lincoln Park - South-2",applicant:"Lincoln Park Boro",fundingYear:"NA",municipality:"Lincoln Park Boro",status:"Active"},
  {projectId:"FL-38",program:"Flood Mitigation",projectTitle:"Lincoln Park - South-3",applicant:"Lincoln Park Boro",fundingYear:"NA",municipality:"Lincoln Park Boro",status:"Active"},
  {projectId:"OS-1775",program:"Open Space",projectTitle:"Loantaka Brook Reservation",applicant:"MC Park Commission",fundingYear:"2019",municipality:"Chatham Twp.",status:"Pending"},
  {projectId:"OS-1773",program:"Open Space",projectTitle:"Loantaka Brook Reservation",applicant:"MC Park Commission",fundingYear:"2019",municipality:"Chatham Twp.",status:"Preserved"},
  {projectId:"FL-16",program:"Flood Mitigation",projectTitle:"Long Hill - Gillette",applicant:"Long Hill Twp",fundingYear:"NA",municipality:"Long Hill Twp",status:"Closed"},
  {projectId:"FL-15",program:"Flood Mitigation",projectTitle:"Long Hill - Stirling",applicant:"Long Hill Twp",fundingYear:"NA",municipality:"Long Hill Twp",status:"Closed"},
  {projectId:"OS-1783",program:"Open Space",projectTitle:"Mahlon Dickerson Reservation",applicant:"MC Park Commission",fundingYear:"20 Sep 2019",municipality:"Jefferson Twp.",status:"Pending"},
  {projectId:"OS-1783",program:"Open Space",projectTitle:"Mahlon Dickerson Reservation",applicant:"The Trust for Public Land",fundingYear:" 20 Sep 2019",municipality:"Jefferson Twp.",status:"Pending"},
  {projectId:"FA-193",program:"Farmland",projectTitle:"Marancon Farm, LLC",applicant:"Marancon Associates, LLP Farm",fundingYear:"20 Sep 2014",municipality:"Mt. Olive Twp.",status:"Preserved"},
  {projectId:"FA-259",program:"Farmland",projectTitle:"Michel, Betsy S",applicant:"Michel 2",fundingYear:"2014",municipality:"Chester Twp.",status:"Preserved"},
  {projectId:"FA-146",program:"Farmland",projectTitle:"Michel, Betsy S",applicant:"Michel 1",fundingYear:"2014",municipality:"Chester Twp.",status:"Preserved"},
  {projectId:"FL-28",program:"Flood Mitigation",projectTitle:"Morristown - Central",applicant:"Morristown Town",fundingYear:"NA",municipality:"Morristown Town",status:"Closed"},
  {projectId:"OS-1760",program:"Open Space",projectTitle:"Mount Paul Memorial County Park",applicant:"MC Park Commission",fundingYear:"2018",municipality:"Chester Twp.",status:"Pending"},
  {projectId:"FA-6",program:"Farmland",projectTitle:"Oblen",applicant:"High View Farm",fundingYear:"2019",municipality:"Mount Olive Twp.",status:"Pending"},
  {projectId:"FA-147",program:"Farmland",projectTitle:"Olsen Farm",applicant:"Olsen Farm",fundingYear:"2016",municipality:"Chester Twp.",status:"Preserved"},
  {projectId:"FA-270",program:"Farmland",projectTitle:"Parks Farm",applicant:"Parks Farm",fundingYear:"2014",municipality:"Chester Twp.",status:"Preserved"},
  {projectId:"FL-7",program:"Flood Mitigation",projectTitle:"Parsippany - 4021",applicant:"Parsippany-Troy Hills Twp",fundingYear:"NA",municipality:"Parsippany-Troy Hills Twp",status:"Closed"},
  {projectId:"FL-36",program:"Flood Mitigation",projectTitle:"Parsippany - 4021-2",applicant:"Parsippany-Troy Hills Twp",fundingYear:"NA",municipality:"Parsippany-Troy Hills Twp",status:"Closed"},
  {projectId:"FL-32",program:"Flood Mitigation",projectTitle:"Parsippany - East Parsippany-2",applicant:"Parsippany-Troy Hills Twp",fundingYear:"NA",municipality:"Parsippany-Troy Hills Twp",status:"Closed"},
  {projectId:"FL-5",program:"Flood Mitigation",projectTitle:"Pequannock - 4021",applicant:"Pequannock Twp",fundingYear:"NA",municipality:"Pequannock Twp",status:"Closed"},
  {projectId:"FL-20",program:"Flood Mitigation",projectTitle:"Pequannock - Route 23",applicant:"Pequannock Twp",fundingYear:"NA",municipality:"Pequannock Twp",status:"Closed"},
  {projectId:"FA-186",program:"Farmland",projectTitle:"Perkoski, Robert G",applicant:"Perkoski Farm",fundingYear:"2019",municipality:"Mt. Olive Twp.",status:"Pending"},
  {projectId:"FA-184",program:"Farmland",projectTitle:"Pultz Farm",applicant:"Pultz Farm",fundingYear:"2014",municipality:"Washington Twp.",status:"Preserved"},
  {projectId:"OS-1776",program:"Open Space",projectTitle:"Pyramid Mountain",applicant:"MC Park Commission",fundingYear:"2019",municipality:"Boonton Twp.",status:"Pending"},
  {projectId:"OS-1777",program:"Open Space",projectTitle:"Pyramid Mountain",applicant:"MC Park Commission",fundingYear:"2019",municipality:"Boonton Twp.",status:"Pending"},
  {projectId:"OS-1778",program:"Open Space",projectTitle:"Pyramid Mountain",applicant:"MC Park Commission",fundingYear:"2019",municipality:"Boonton Twp.",status:"Pending"},
  {projectId:"FA-149",program:"Farmland",projectTitle:"Riamede Farm",applicant:"Riamede Farm",fundingYear:"2014",municipality:"Chester Twp.",status:"Pending"},
  {projectId:"FL-10",program:"Flood Mitigation",projectTitle:"Riverdale - Harrison Rd",applicant:"Riverdale Boro",fundingYear:"NA",municipality:"Riverdale Boro",status:"Closed"},
  {projectId:"FA-277",program:"Farmland",projectTitle:"Rowe Farm",applicant:"Rowe Farm",fundingYear:" 20 Sep 2019",municipality:"Mendham Boro.",status:"Pending"},
  {projectId:"FA-205",program:"Farmland",projectTitle:"Smith, Robert",applicant:"Willow Pond Farm",fundingYear:"2013",municipality:"Washington Twp.",status:"Preserved"},
  {projectId:"FA-261",program:"Farmland",projectTitle:"Tinc Farm",applicant:"Tinc Farm",fundingYear:" 20 Sep 2014",municipality:"Mt. Olive Twp.",status:"Preserved"},
  {projectId:"OS-1785",program:"Open Space",projectTitle:"Turkey Brook Park",applicant:"Mount Olive Twp.",fundingYear:"20 Sep 2019",municipality:"Mount Olive Twp.",status:"Pending"},
  {projectId:"OS-1784",program:"Open Space",projectTitle:"Vallevue Farm",applicant:"Morris Township",fundingYear:"20 Sep 2019",municipality:"Morris Twp.",status:"Pending"},
  {projectId:"OS-1786",program:"Open Space",projectTitle:"Veterans Park Addition",applicant:"Roxbury Township",fundingYear:" 20 Sep 2019",municipality:"Roxbury Twp.",status:"Pending"},
  {projectId:"OS-1761",program:"Open Space",projectTitle:"Waughaw Mountain Greenway",applicant:"MC Park Commission",fundingYear:"20 Sep 2018",municipality:"Riverdale Boro.",status:"Preserved"},
  {projectId:"OS-1763",program:"Open Space",projectTitle:"Waughaw Mountain Greenway",applicant:"MC Park Commission",fundingYear:" 20 Sep 2018",municipality:"Riverdale Boro.",status:"Preserved"},
  {projectId:"OS-1780",program:"Open Space",projectTitle:"Waughaw Mountain Greenway",applicant:"MC Park Commission",fundingYear:"20 Sep 2019",municipality:"Montville Twp.",status:"Pending"},
  {projectId:"FA-171",program:"Farmland",projectTitle:"Wendover Farm Partners LP",applicant:"DeNeufville Farm",fundingYear:"20 Sep 2014",municipality:"Mendham Twp.",status:"Preserved"},
  {projectId:"OS-1771",program:"Open Space",projectTitle:"West Morris Greenway",applicant:"MC Park Commission",fundingYear:" 20 Sep 2019",municipality:"Wharton Boro.",status:"Pending"},
  {projectId:"OS-1772",program:"Open Space",projectTitle:"West Morris Greenway",applicant:"MC Park Commission",fundingYear:"20 Sep 2019",municipality:"Rockaway Twp.",status:"Pending"},
  {projectId:"FA-280",program:"Farmland",projectTitle:"Williams Farm",applicant:"Williams Farm",fundingYear:" 20 Sep 2017",municipality:"Mt. Olive Twp.",status:"Pending"},
  {projectId:"FA-272",program:"Farmland",projectTitle:"Young #2 Farm",applicant:"Young Farm",fundingYear:" 20 Sep 2014",municipality:"Chester Twp.",status:"Preserved"}]

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss']
})
export class ApplicationsComponent implements OnInit {
 
  public displayedColumns: string[] = ['projectId','applicant','program','municipality','fundingYear','status','projectTitle'];
  public dataSource = new MatTableDataSource(SAMPLE_PROJECT_DATA);

  constructor() { }

  ngOnInit(): void {
  }
  doFilter(value: string)  {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
  

}
