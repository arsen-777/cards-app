// import { useEffect } from 'react';

// export default function useClickOutside(ref, closeCallback = () => null) {
//   const handleClose = (e) => {
//     if (!ref.current.contains(e.target)) {
//       console.log('works');
//       closeCallback();
//     }
//   };
//   useEffect(() => {
//     if (ref.current) {
//       window.addEventListener('click', handleClose);
//     }
//     return () => {
//       window.removeEventListener('click', handleClose);
//     };
//   }, [ref, handleClose]);
// }
