import { SafeResourceUrl } from "@angular/platform-browser";

/**
 * Model for a project
 */
export class ProjectModel {
	/* 
	 * The id of the project
	 */
	public id: number;

    /* 
	 * The id of the person
	 */
    public profileId: number;
	
	/* 
	 * The title of the project
	 */
	public title: string;

	/* 
	 * A subtitle for the project
	 */
	public subtitle: string;

	/* 
	 * The date started
	 */
	public startDate: Date;
	
	/* 
	 * The date finished
	 */
	public endDate: Date;

	/* 
	 * The tools used to create the project
	 */
	public tools: string[];

	/* 
	 * A link to the project
	 */
	public link: SafeResourceUrl;

	/* 
	 * The description of the project
	 */
	public description: string;
	
	/**
	 * The photo of the project
	 */
	public photo: SafeResourceUrl;

	/**
	 * Screenshots of the project
	 */
	public screenshots: string[];
}