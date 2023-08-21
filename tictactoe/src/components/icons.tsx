import { View, Text } from 'react-native'
import React from 'react'
import type { PropsWithChildren } from 'react'

import Icon from 'react-native-vector-icons/FontAwesome'

type IconsProps = PropsWithChildren<{
    name: string
}>

const Icons = ({ name }: IconsProps) => {
    switch (name) {
        case 'circle':
            return <Icon name='circle-thin' size={38} color='#f72ecd' />
        case 'cross':
            return <Icon name='times' size={38} color='#38cc77' />
        default:
            return <Icon name='pencil' size={38} color='#0d0d0d' />
    }
}

export default Icons