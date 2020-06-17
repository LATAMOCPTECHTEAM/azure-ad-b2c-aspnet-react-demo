#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/core/aspnet:2.2-stretch-slim AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:2.2-stretch AS build
WORKDIR /src
COPY ["B2CDemo.API/B2CDemo.API.csproj", "B2CDemo.API/"]
RUN dotnet restore "B2CDemo.API/B2CDemo.API.csproj"
COPY . .
WORKDIR "/src/B2CDemo.API"
RUN dotnet build "B2CDemo.API.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "B2CDemo.API.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "B2CDemo.API.dll"]