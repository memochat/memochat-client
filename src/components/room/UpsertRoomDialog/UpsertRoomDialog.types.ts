export interface UpsertRoomDialogProps {
  type: 'create' | 'update';
  defaultValue?: {
    /** @todo api에 따라 변경될 여지 ㅇ */
    roomName: string;
    roomTypeId: number;
  };
  open: boolean;
  onClose: () => void;
}
