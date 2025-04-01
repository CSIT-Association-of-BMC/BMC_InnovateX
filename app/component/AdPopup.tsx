// "use client";
// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { X } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
// import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
// import { getSponsorPamphlet } from "@/actions/getSponsor";

// interface Ad {
//   id: number;
//   imageUrl: string;
//   linkUrl: string;
// }

// export function AdPopup() {
//   const [open, setOpen] = useState(false);
//   const [ads, setAd] = useState<Ad | null>(null);

//   useEffect(() => {
//     (async () => {
//       const res = await getSponsorPamphlet();
//       setAd(res);
//     })();

//     const timer = setTimeout(() => {
//       setOpen(true);
//     }, 2000);
//     return () => clearTimeout(timer);
//   }, []);

//   const handleImageClick = () => {
//     if (ads?.linkUrl) {
//       window.open(ads.linkUrl, "_blank");
//     }
//   };

//   return (
//     <Dialog open={open} onOpenChange={setOpen}>
//       <VisuallyHidden>
//         <DialogTitle>Advertisiment</DialogTitle>
//       </VisuallyHidden>
//       <DialogContent className="sm:max-w-md p-0 overflow-hidden">
//         {ads && (
//           <div className="relative">
//             {/* Close button positioned in the top-right corner */}
//             <Button
//               variant="ghost"
//               size="icon"
//               onClick={() => setOpen(false)}
//               className="absolute top-2 right-2 h-8 w-8 rounded-full bg-black/50 hover:bg-black/70 z-10"
//             >
//               <X className="h-4 w-4 text-white" />
//             </Button>

//             {/* Clickable image */}
//             <div onClick={handleImageClick} className="cursor-pointer">
//               <Image
//                 src={ads.imageUrl}
//                 alt="Advertisement"
//                 width={1000}
//                 height={1000}
//                 className="w-full object-cover"
//               />
//             </div>
//           </div>
//         )}
//       </DialogContent>
//     </Dialog>
//   );
// }
