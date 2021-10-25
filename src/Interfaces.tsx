// could call file .ts

export interface BoxInterface {
    width: string;
    height: string;
    backgroundColor: string;
}

export interface BoxesInterface extends BoxInterface {
    id: string;
  }

export interface BoxProps extends BoxesInterface{
    remove: (id: string) => void;
  }

export interface NewBoxProps {
    createBox: (box: BoxesInterface)=>void;
  }
