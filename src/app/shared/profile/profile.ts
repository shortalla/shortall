
/**
 * Model for the personal profile
 */
export class ProfileModel {
	/* 
	 * The id of the person
	 */
	public profileId: number;

	/* 
	 * The first name of the person
	 */
	public firstName: string;

    /* 
	 * The last name of the person
	 */
	public lastName: string;
	
	/* 
	 * The person's date of birth
	 */
	public dateOfBirth: Date;
	
	/* 
	 * The person's place of birth
	 */
	public placeOfBirth: string;
	
	/* 
	 * The person's current location i.e. address
	 */
	public location: string;

	/* 
	 * The work title of the person i.e. common job title
	 */
    public workTitle: string;

	/* 
	 * The skills provided by the person
	 */
	public skills: string[];

	/**
	 * The photo of the person
	 */
	public photo: string;
}