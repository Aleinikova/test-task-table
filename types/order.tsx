export interface Order {
  id: string;
  item: string;
  createdAt: string;
  status: 'draft' | 'pending' | 'complete';
}
