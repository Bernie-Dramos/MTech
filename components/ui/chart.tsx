"use client"

import * as React from "react"
import * as RechartsPrimitive from "recharts"

import { cn } from "@/lib/utils"

// Workaround for https://github.com/recharts/recharts/issues/3615
const Tooltip = ({
  active,
  payload,
  label,
  formatter,
  content,
  className,
}: React.ComponentProps<typeof RechartsPrimitive.Tooltip> & {
  formatter?: (value: number | string, name: number | string, props: any) => React.ReactNode
}) => {
  if (active && payload && payload.length) {
    const value = formatter ? formatter(payload[0].value, payload[0].name, payload[0]) : payload[0].value

    return (
      <div
        className={cn(
          "relative z-50 rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md",
          className,
        )}
      >
        {content ? (
          content({ active, payload, label })
        ) : (
          <div>
            {label && <p className="label">{`${label} :`}</p>}
            <p className="intro">{String(value)}</p>
          </div>
        )}
      </div>
    )
  }

  return null
}

const ChartContext = React.createContext<{
  config: ChartConfig
} | null>(null)

type ChartConfig = {
  [k: string]: {
    label?: string
    color?: string
    icon?: React.ComponentType
  }
}

type ChartContainerProps = React.ComponentProps<typeof RechartsPrimitive.ResponsiveContainer> & {
  config: ChartConfig
  children: React.ReactNode
}

const ChartContainer = ({ config, children, className, ...props }: ChartContainerProps) => {
  const newChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child) && child.type === RechartsPrimitive.Tooltip) {
      return React.cloneElement(child, {
        content: (props: any) => (
          <Tooltip
            {...props}
            formatter={(child.props as any).formatter || config[props.payload?.[0]?.name]?.formatter}
            content={child.props.content}
            className={child.props.className}
          />
        ),
      } as React.ComponentProps<typeof RechartsPrimitive.Tooltip>)
    }
    return child
  })

  return (
    <ChartContext.Provider value={{ config }}>
      <RechartsPrimitive.ResponsiveContainer className={cn("flex h-[300px] w-full", className)} {...props}>
        {newChildren}
      </RechartsPrimitive.ResponsiveContainer>
    </ChartContext.Provider>
  )
}
ChartContainer.displayName = "ChartContainer"

const ChartTooltip = ({
  cursor = false,
  content,
  formatter,
  className,
  ...props
}: React.ComponentProps<typeof RechartsPrimitive.Tooltip> & {
  formatter?: (value: number | string, name: number | string, props: any) => React.ReactNode
}) => {
  const { config } = useChart()

  return (
    <RechartsPrimitive.Tooltip
      cursor={cursor}
      content={content ? content : <Tooltip formatter={formatter} content={content} className={className} />}
      formatter={formatter}
      className={className}
      {...props}
    />
  )
}
ChartTooltip.displayName = "ChartTooltip"

const ChartLegend = ({
  className,
  content,
  ...props
}: React.ComponentProps<typeof RechartsPrimitive.Legend> & {
  content?: React.ComponentProps<typeof RechartsPrimitive.Legend>["content"]
}) => {
  const { config } = useChart()

  return (
    <RechartsPrimitive.Legend
      content={
        content
          ? content
          : ({ payload }) => (
              <div className={cn("flex flex-wrap items-center justify-center gap-4", className)}>
                {payload &&
                  payload.map((item: any) => {
                    const key = item.value
                    if (typeof key !== "string") {
                      return null
                    }
                    return (
                      <div key={key} className="flex items-center gap-1.5">
                        {config[key]?.icon && <config.icon className={cn("h-3 w-3", config[key]?.color)} />}
                        <span className="text-muted-foreground">{config[key]?.label}</span>
                      </div>
                    )
                  })}
              </div>
            )
      }
      {...props}
    />
  )
}
ChartLegend.displayName = "ChartLegend"

const ChartCrosshair = React.forwardRef<SVGSVGElement, React.ComponentProps<typeof RechartsPrimitive.Crosshair>>(
  ({ className, ...props }, ref) => (
    <RechartsPrimitive.Crosshair ref={ref} className={cn("stroke-border stroke-dasharray-2", className)} {...props} />
  ),
)
ChartCrosshair.displayName = "ChartCrosshair"

const ChartTooltipContent = React.forwardRef<HTMLDivElement, React.ComponentProps<typeof Tooltip>>(
  ({ className, ...props }, ref) => (
    <Tooltip
      ref={ref}
      className={cn("rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md", className)}
      {...props}
    />
  ),
)
ChartTooltipContent.displayName = "ChartTooltipContent"

function useChart() {
  const context = React.useContext(ChartContext)
  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />")
  }
  return context
}

export { ChartContainer, ChartTooltip, ChartLegend, ChartCrosshair, ChartTooltipContent, useChart }
