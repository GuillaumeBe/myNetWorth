export interface IProps {
  onClick: React.FormEventHandler<HTMLInputElement>;
  isAsset?: boolean;
  children: React.ReactNode;
}
