import { Button } from "@/components/ui/button"
import { InfinityIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

type Props = {
    activeCourse: { imageSrc: string, title: string },
    hearts: number,
    points: number,
    hasActiveSubscription: boolean
}

const UserProgress = ({ activeCourse, hearts, points, hasActiveSubscription }: Props) => {
    return (
        <div className="flex items-center justify-between gap-x-2 w-full">
            <Link href="/courses">
                <Button variant='ghost'>
                    <Image src={activeCourse.imageSrc} alt={activeCourse.title} width={32} height={32} className="rounded-md border" />
                </Button>
            </Link>

            <Link href='/shop'>
                <Button variant='ghost' className="text-orange-500">
                    <div className="flex items-center gap-x-2">
                        <Image src={"/points.svg"} height={28} width={28} className="mr-2" alt="points" />
                        {points}
                    </div>
                </Button>
            </Link>

            <Link href='/shop'>
                <Button variant='ghost' className="text-rose-500">
                    <div className="flex items-center gap-x-2">
                        <Image src={"/heart.svg"} height={28} width={28} className="mr-2" alt="hearts" />
                        {hasActiveSubscription ? <InfinityIcon className="w-4 h-4 stroke-[3]" /> : hearts}
                    </div>
                </Button>
            </Link>
        </div>
    )
}

export default UserProgress