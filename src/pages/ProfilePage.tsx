// src/pages/ProfilePage.tsx
import React from "react";
import { useUser } from "@/hooks/useUser";
import ProfileForm from "@/components/ProfileForm";

const ProfilePage: React.FC = () => {
  const { user, updateUser } = useUser();

  if (!user) return <div>Please log in to view your profile</div>;

  return (
    <div>
      <h1>Your Profile</h1>
      <ProfileForm user={user} onSubmit={updateUser} />
    </div>
  );
};

export default ProfilePage;
