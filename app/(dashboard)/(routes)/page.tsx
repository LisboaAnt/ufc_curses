import { UserButton } from "@clerk/nextjs"

export default function Home() {
  return (
    <div>
      <p>Olá mundo</p>
        <UserButton
        afterSwitchSessionUrl="/"
        />
    </div>
    )
}
