
/**
 * Model for a specific job
 */
export class JobModel {
    /* 
	 * The id of the job
	 */
    public jobId: number;

    /* 
	 * The id of the job
	 */
    public profileId: number;
    
	/* 
	 * The title of the job
	 */
	public title: string;

    /* 
	 * The company
	 */
	public company: string;
	
	/* 
	 * The date started
	 */
	public startDate: Date;
	
	/* 
	 * The date finished
	 */
	public endDate: Date;
	
	/* 
	 * The company website
	 */
    public website: string;
    
    /* 
	 * The company location
	 */
	public location: string;

	/* 
	 * The responsibilities of this job
	 */
	public responsibilities: string[];
	
	/**
	 * The photo of the company
	 */
	public photo: string;
}