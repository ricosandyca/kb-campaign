export enum CampaignType {
  PERSONAL = 'PERSONAL',
}

export type Campaign = {
  id: string;
  order: number;
  parent_project_id: number;
  title: string;
  expired: number;
  image: string;
  days_remaining: number;
  donation_received: number;
  campaigner: string;
  campaigner_type: CampaignType;
  campaigner_badge: string;
  campaigner_is_verified: boolean;
  category_name: string;
  is_forever_running: boolean;
  is_open_goal: boolean;
  request_userdata: boolean;
  donation_target: number;
  donation_percentage: number;
  short_url: string;
  is_featured: number;
  custom_fb_pixel: string;
};
