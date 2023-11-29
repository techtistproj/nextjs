export interface user{
    us_id:number;
    us_name:string;
    us_email:string;
    us_city:string
}
export interface user_page{
      getUsers:user[],
      setUsers:user | null
}