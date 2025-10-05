export type ItineraryItem = {
  title: string;
  time: string;
  address: string;
  addressLink: string;
  emoji?: string;
  icon?: any;
  render: "emoji" | "icon" | "lucide-lab";
  hide?: () => boolean;
};
