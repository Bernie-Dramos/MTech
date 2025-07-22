"use client"

import * as React from "react"
import * as RechartsPrimitive from "recharts"

import { cn } from "@/lib/utils"

// Workaround for https://github.com/recharts/recharts/issues/3615
type RechartsTooltipProps = {
  active?: boolean;
  payload?: Array<{ value: any; name: any }>;
  label?: any;
  formatter?: (value: number | string, name: number | string, props: any) => React.ReactNode;
  content?: (props: any) => React.ReactNode;
  className?: string;
};

const Tooltip = ({
  active,
  payload,
  label,
  formatter,
  content,
  className,
}: RechartsTooltipProps) => {
  if (active && payload && payload.length) {
    const value = formatter ? formatter(payload[0].value, payload[0].name, payload[0]) : payload[0].value;

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
    );
  }
  return null;
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
            formatter={(child.props as any).formatter}
            content={child.props.content}
          />
        ),
      } as React.ComponentProps<typeof RechartsPrimitive.Tooltip>)
    }
    return child
  })

  return (
    <ChartContext.Provider value={{ config }}>
      <RechartsPrimitive.ResponsiveContainer {...props}>
        {Array.isArray(newChildren) ? <>{newChildren}</> : newChildren}
      </RechartsPrimitive.ResponsiveContainer>
    </ChartContext.Provider>
  )
}
ChartContainer.displayName = "ChartContainer"

const ChartTooltip = ({
  cursor = false,
  content,
  formatter,
  ...props
}: Omit<React.ComponentProps<typeof RechartsPrimitive.Tooltip>, 'className'> & {
  formatter?: (value: number | string, name: number | string, props: any) => React.ReactNode
}) => {
  const { config } = useChart()

  // Only pass content if it is a valid React element, otherwise use our Tooltip
  // Always pass a function as content, per Recharts v3+ signature
  const tooltipContentFn = (props: any) => {
    if (typeof content === 'function') {
      return content(props);
    }
    return <Tooltip {...props} formatter={formatter} content={content} />;
  };

  return (
    <RechartsPrimitive.Tooltip
      cursor={cursor}
      content={tooltipContentFn}
      formatter={formatter}
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
                        {(() => {
                          const Icon = config[key]?.icon;
                          if (typeof Icon === "function") {
                            return <Icon />;
                          }
                          return null;
                        })()}
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





function useChart() {
  const context = React.useContext(ChartContext)
  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />")
  }
  return context
}

export { ChartContainer, ChartTooltip, ChartLegend, useChart }
