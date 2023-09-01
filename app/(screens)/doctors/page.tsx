import ProfileDoctor from "@/components/doctor/Profile";
import { db } from "@/model/firebase";
import { collection, getDocs } from "@firebase/firestore";
import React from "react";

export type doctorProps = {
  name: string;
  rating?: string;
  image?: string;
  uuid: string;
  experience?: string;
  specializing: string;
};

export default async function Profile() {
  const querySnapshot = await getDocs(collection(db, "doctors"));

  const data: Array<doctorProps> = [];

  querySnapshot.forEach((doc) => {
    data.push({
      name: doc.data().name,
      specializing: doc.data().specializing,
      uuid: doc.data().uuid,
    });
  });

  return (
    <div className="grid grid-cols-5 gap-3">
      {data.map((doctor: doctorProps) => (
        <ProfileDoctor key={doctor.uuid} data={doctor} />
      ))}
    </div>
  );
}
