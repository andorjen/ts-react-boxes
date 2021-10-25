interface BoxInterface {
    width: string;
    height: string;
    backgroundColor: string;
}

interface BoxesInterface extends BoxInterface {
    id: string;
  }

interface BoxProps extends BoxesInterface{
    remove: (id: string) => void;
  }

interface NewBoxProps {
    createBox: (box: BoxesInterface)=>void;
  }

export type {BoxInterface, BoxesInterface, BoxProps, NewBoxProps};